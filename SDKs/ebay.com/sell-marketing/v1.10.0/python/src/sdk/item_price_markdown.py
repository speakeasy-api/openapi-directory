import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class ItemPriceMarkdown:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def create_item_price_markdown_promotion(self, request: operations.CreateItemPriceMarkdownPromotionRequest) -> operations.CreateItemPriceMarkdownPromotionResponse:
        r"""This method creates an item price markdown promotion (know simply as a &quot;markdown promotion&quot;) where a discount amount is applied directly to the items included the promotion. Discounts can be specified as either a monetary amount or a percentage off the standard sales price. eBay highlights promoted items by placing teasers for the items throughout the online sales flows. Unlike an item promotion, a markdown promotion does not require the buyer meet a &quot;threshold&quot; before the offer takes effect. With markdown promotions, all the buyer needs to do is purchase the item to receive the promotion benefit. Important: There are some restrictions for which listings are available for price markdown promotions. For details, see Promotions Manager requirements and restrictions. In addition, we recommend you list items at competitive prices before including them in your markdown promotions. For an extensive list of pricing recommendations, see the Growth tab in Seller Hub. There are two ways to add items to markdown promotions: Key-based promotions select items using either the listing IDs or inventory reference IDs of the items you want to promote. Note that if you use inventory reference IDs, you must specify both the inventoryReferenceId and the associated inventoryReferenceType of the item(s) you want to include the promotion. Rule-based promotions select items using a list of eBay category IDs or seller Store category IDs. Rules can further constrain items in a promotion by minimum and maximum prices, brands, and item conditions. New promotions must be created in either a DRAFT or a SCHEDULED state. Use the DRAFT state when you are initially creating a promotion and you want to be sure it's correctly configured before scheduling it to run. When you create a promotion, the promotion ID is returned in the Location response header. Use this ID to reference the promotion in subsequent requests (such as to schedule a promotion that's in a DRAFT state). Tip: Refer to Promotions Manager in the Selling Integration Guide for details and examples showing how to create and manage seller promotions. Markdown promotions are available on all eBay marketplaces. For more information, see Promotions Manager requirements and restrictions.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/item_price_markdown"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateItemPriceMarkdownPromotionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_item_price_markdown_promotion_201_application_json_object = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 409:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def delete_item_price_markdown_promotion(self, request: operations.DeleteItemPriceMarkdownPromotionRequest) -> operations.DeleteItemPriceMarkdownPromotionResponse:
        r"""This method deletes the item price markdown promotion specified by the promotion_id path parameter. Call getPromotions to retrieve the IDs of a seller's promotions. You can delete any promotion with the exception of those that are currently active (RUNNING). To end a running promotion, call updateItemPriceMarkdownPromotion and adjust the endDate field as appropriate.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/item_price_markdown/{promotion_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteItemPriceMarkdownPromotionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_item_price_markdown_promotion(self, request: operations.GetItemPriceMarkdownPromotionRequest) -> operations.GetItemPriceMarkdownPromotionResponse:
        r"""This method returns the complete details of the item price markdown promotion that's indicated by the promotion_id path parameter. Call getPromotions to retrieve the IDs of a seller's promotions.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/item_price_markdown/{promotion_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetItemPriceMarkdownPromotionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ItemPriceMarkdown])
                res.item_price_markdown = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def update_item_price_markdown_promotion(self, request: operations.UpdateItemPriceMarkdownPromotionRequest) -> operations.UpdateItemPriceMarkdownPromotionResponse:
        r"""This method updates the specified item price markdown promotion with the new configuration that you supply in the payload of the request. Specify the promotion you want to update using the promotion_id path parameter. Call getPromotions to retrieve the IDs of a seller's promotions. When updating a promotion, supply all the fields that you used to configure the original promotion (and not just the fields you are updating). eBay replaces the specified promotion with the values you supply in the update request and if you don't pass a field that currently has a value, the update request fails. The parameters you are allowed to update with this request depend on the status of the promotion you're updating: DRAFT or SCHEDULED promotions: You can update any of the parameters in these promotions that have not yet started to run, including the discountRules. RUNNING promotions: You can change the endDate and the item's inventory but you cannot change the promotional discount or the promotion's start date. ENDED promotions: Nothing can be changed.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/item_price_markdown/{promotion_id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateItemPriceMarkdownPromotionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_item_price_markdown_promotion_200_application_json_object = out
        elif r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 409:
            pass
        elif r.status_code == 500:
            pass

        return res

    