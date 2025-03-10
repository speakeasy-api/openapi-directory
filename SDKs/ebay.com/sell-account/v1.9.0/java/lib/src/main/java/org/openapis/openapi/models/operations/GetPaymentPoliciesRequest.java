/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GetPaymentPoliciesRequest {
    /**
     * This query parameter specifies the eBay marketplace of the policies you want to retrieve. For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=marketplace_id")
    public String marketplaceId;

    public GetPaymentPoliciesRequest withMarketplaceId(String marketplaceId) {
        this.marketplaceId = marketplaceId;
        return this;
    }
    
    public GetPaymentPoliciesRequest(@JsonProperty("marketplace_id") String marketplaceId) {
        this.marketplaceId = marketplaceId;
  }
}
