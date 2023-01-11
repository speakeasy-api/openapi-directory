import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Collections:
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

    
    def collection_articles(self, request: operations.CollectionArticlesRequest) -> operations.CollectionArticlesResponse:
        r"""Public Collection Articles
        Returns a list of public collection articles
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/collections/{collection_id}/articles", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CollectionArticlesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Article]])
                res.articles = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 422:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def collection_details(self, request: operations.CollectionDetailsRequest) -> operations.CollectionDetailsResponse:
        r"""Collection details
        View a collection
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/collections/{collection_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CollectionDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CollectionComplete])
                res.collection_complete = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def collection_version_details(self, request: operations.CollectionVersionDetailsRequest) -> operations.CollectionVersionDetailsResponse:
        r"""Collection Version details
        View details for a certain version of a collection
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/collections/{collection_id}/versions/{version_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CollectionVersionDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CollectionComplete])
                res.collection_complete = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def collection_versions(self, request: operations.CollectionVersionsRequest) -> operations.CollectionVersionsResponse:
        r"""Collection Versions list
        Returns a list of public collection Versions
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/collections/{collection_id}/versions", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CollectionVersionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.CollectionVersions]])
                res.collection_versions = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def collections_list(self, request: operations.CollectionsListRequest) -> operations.CollectionsListResponse:
        r"""Public Collections
        Returns a list of public collections
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/collections"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CollectionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Collection]])
                res.collections = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 422:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def collections_search(self, request: operations.CollectionsSearchRequest) -> operations.CollectionsSearchResponse:
        r"""Public Collections Search
        Returns a list of public collections
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/collections/search"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CollectionsSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Collection]])
                res.collections = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 422:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_collection_article_delete(self, request: operations.PrivateCollectionArticleDeleteRequest) -> operations.PrivateCollectionArticleDeleteResponse:
        r"""Delete collection article
        De-associate article from collection
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/collections/{collection_id}/articles/{article_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateCollectionArticleDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_collection_articles_add(self, request: operations.PrivateCollectionArticlesAddRequest) -> operations.PrivateCollectionArticlesAddResponse:
        r"""Add collection articles
        Associate new articles with the collection. This will add new articles to the list of already associated articles
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/collections/{collection_id}/articles", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateCollectionArticlesAddResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Location])
                res.location = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_collection_articles_list(self, request: operations.PrivateCollectionArticlesListRequest) -> operations.PrivateCollectionArticlesListResponse:
        r"""List collection articles
        List collection articles
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/collections/{collection_id}/articles", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateCollectionArticlesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Article]])
                res.articles = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_collection_articles_replace(self, request: operations.PrivateCollectionArticlesReplaceRequest) -> operations.PrivateCollectionArticlesReplaceResponse:
        r"""Replace collection articles
        Associate new articles with the collection. This will remove all already associated articles and add these new ones
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/collections/{collection_id}/articles", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateCollectionArticlesReplaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 205:
            res.headers = r.headers
            
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_collection_author_delete(self, request: operations.PrivateCollectionAuthorDeleteRequest) -> operations.PrivateCollectionAuthorDeleteResponse:
        r"""Delete collection author
        Delete collection author
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/collections/{collection_id}/authors/{author_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateCollectionAuthorDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_collection_authors_add(self, request: operations.PrivateCollectionAuthorsAddRequest) -> operations.PrivateCollectionAuthorsAddResponse:
        r"""Add collection authors
        Associate new authors with the collection. This will add new authors to the list of already associated authors
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/collections/{collection_id}/authors", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateCollectionAuthorsAddResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Location])
                res.location = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_collection_authors_list(self, request: operations.PrivateCollectionAuthorsListRequest) -> operations.PrivateCollectionAuthorsListResponse:
        r"""List collection authors
        List collection authors
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/collections/{collection_id}/authors", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateCollectionAuthorsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Author]])
                res.authors = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_collection_authors_replace(self, request: operations.PrivateCollectionAuthorsReplaceRequest) -> operations.PrivateCollectionAuthorsReplaceResponse:
        r"""Replace collection authors
        Associate new authors with the collection. This will remove all already associated authors and add these new ones
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/collections/{collection_id}/authors", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateCollectionAuthorsReplaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 205:
            res.headers = r.headers
            
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_collection_categories_add(self, request: operations.PrivateCollectionCategoriesAddRequest) -> operations.PrivateCollectionCategoriesAddResponse:
        r"""Add collection categories
        Associate new categories with the collection. This will add new categories to the list of already associated categories
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/collections/{collection_id}/categories", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateCollectionCategoriesAddResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Location])
                res.location = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_collection_categories_list(self, request: operations.PrivateCollectionCategoriesListRequest) -> operations.PrivateCollectionCategoriesListResponse:
        r"""List collection categories
        List collection categories
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/collections/{collection_id}/categories", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateCollectionCategoriesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Category]])
                res.categories = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_collection_categories_replace(self, request: operations.PrivateCollectionCategoriesReplaceRequest) -> operations.PrivateCollectionCategoriesReplaceResponse:
        r"""Replace collection categories
        Associate new categories with the collection. This will remove all already associated categories and add these new ones
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/collections/{collection_id}/categories", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateCollectionCategoriesReplaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 205:
            res.headers = r.headers
            
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_collection_category_delete(self, request: operations.PrivateCollectionCategoryDeleteRequest) -> operations.PrivateCollectionCategoryDeleteResponse:
        r"""Delete collection category
        De-associate category from collection
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/collections/{collection_id}/categories/{category_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateCollectionCategoryDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_collection_create(self, request: operations.PrivateCollectionCreateRequest) -> operations.PrivateCollectionCreateResponse:
        r"""Create collection
        Create a new Collection by sending collection information
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/collections"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateCollectionCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CollectionComplete])
                res.collection_complete = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 500:
            pass

        return res

    
    def private_collection_delete(self, request: operations.PrivateCollectionDeleteRequest) -> operations.PrivateCollectionDeleteResponse:
        r"""Delete collection
        Delete n collection
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/collections/{collection_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateCollectionDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_collection_details(self, request: operations.PrivateCollectionDetailsRequest) -> operations.PrivateCollectionDetailsResponse:
        r"""Collection details
        View a collection
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/collections/{collection_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateCollectionDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CollectionComplete])
                res.collection_complete = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_collection_private_link_create(self, request: operations.PrivateCollectionPrivateLinkCreateRequest) -> operations.PrivateCollectionPrivateLinkCreateResponse:
        r"""Create collection private link
        Create new private link
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/collections/{collection_id}/private_links", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateCollectionPrivateLinkCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Location])
                res.location = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_collection_private_link_delete(self, request: operations.PrivateCollectionPrivateLinkDeleteRequest) -> operations.PrivateCollectionPrivateLinkDeleteResponse:
        r"""Disable private link
        Disable/delete private link for this collection
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/collections/{collection_id}/private_links/{link_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateCollectionPrivateLinkDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_collection_private_link_update(self, request: operations.PrivateCollectionPrivateLinkUpdateRequest) -> operations.PrivateCollectionPrivateLinkUpdateResponse:
        r"""Update collection private link
        Update existing private link for this collection
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/collections/{collection_id}/private_links/{link_id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateCollectionPrivateLinkUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 205:
            res.headers = r.headers
            
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 422:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_collection_private_links_list(self, request: operations.PrivateCollectionPrivateLinksListRequest) -> operations.PrivateCollectionPrivateLinksListResponse:
        r"""List collection private links
        List article private links
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/collections/{collection_id}/private_links", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateCollectionPrivateLinksListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.PrivateLink]])
                res.private_links = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_collection_publish(self, request: operations.PrivateCollectionPublishRequest) -> operations.PrivateCollectionPublishResponse:
        r"""Private Collection Publish
        When a collection is published, a new public version will be generated. Any further updates to the collection will affect the private collection data. In order to make these changes publicly visible, an explicit publish operation is needed.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/collections/{collection_id}/publish", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateCollectionPublishResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Location])
                res.location = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 500:
            pass

        return res

    
    def private_collection_reserve_doi(self, request: operations.PrivateCollectionReserveDoiRequest) -> operations.PrivateCollectionReserveDoiResponse:
        r"""Private Collection Reserve DOI
        Reserve DOI for collection
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/collections/{collection_id}/reserve_doi", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateCollectionReserveDoiResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CollectionDoi])
                res.collection_doi = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 500:
            pass

        return res

    
    def private_collection_reserve_handle(self, request: operations.PrivateCollectionReserveHandleRequest) -> operations.PrivateCollectionReserveHandleResponse:
        r"""Private Collection Reserve Handle
        Reserve Handle for collection
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/collections/{collection_id}/reserve_handle", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateCollectionReserveHandleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CollectionHandle])
                res.collection_handle = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 500:
            pass

        return res

    
    def private_collection_update(self, request: operations.PrivateCollectionUpdateRequest) -> operations.PrivateCollectionUpdateResponse:
        r"""Update collection
        Update collection details
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/collections/{collection_id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateCollectionUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 205:
            res.headers = r.headers
            
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_collections_list(self, request: operations.PrivateCollectionsListRequest) -> operations.PrivateCollectionsListResponse:
        r"""Private Collections List
        List private collections
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/collections"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateCollectionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Collection]])
                res.collections = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 500:
            pass

        return res

    
    def private_collections_search(self, request: operations.PrivateCollectionsSearchRequest) -> operations.PrivateCollectionsSearchResponse:
        r"""Private Collections Search
        Returns a list of private Collections
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/collections/search"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateCollectionsSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Collection]])
                res.collections = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 500:
            pass

        return res

    