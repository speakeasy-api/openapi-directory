/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class HeadOrderRequest {
    /**
     * ETag value to identify the last known version of requested resource.\
     * To avoid useless exchange, we recommend you to indicate the ETag you previously got from this operation.\
     * If the ETag value does not match the response will be 200 to give you a new content, otherwise the response will be: 304 Not Modified, without any content.\
     * For more details go to this link: http://tools.ietf.org/html/rfc7232#section-2.3
     * 
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-None-Match")
    public String ifNoneMatch;

    public HeadOrderRequest withIfNoneMatch(String ifNoneMatch) {
        this.ifNoneMatch = ifNoneMatch;
        return this;
    }
    
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public Integer accountId;

    public HeadOrderRequest withAccountId(Integer accountId) {
        this.accountId = accountId;
        return this;
    }
    
    /**
     * The BeezUP Order identifier
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=beezUPOrderId")
    public String beezUPOrderId;

    public HeadOrderRequest withBeezUPOrderId(String beezUPOrderId) {
        this.beezUPOrderId = beezUPOrderId;
        return this;
    }
    
    /**
     * The marketplace technical code
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=marketplaceTechnicalCode")
    public String marketplaceTechnicalCode;

    public HeadOrderRequest withMarketplaceTechnicalCode(String marketplaceTechnicalCode) {
        this.marketplaceTechnicalCode = marketplaceTechnicalCode;
        return this;
    }
    
    public HeadOrderRequest(@JsonProperty("accountId") Integer accountId, @JsonProperty("beezUPOrderId") String beezUPOrderId, @JsonProperty("marketplaceTechnicalCode") String marketplaceTechnicalCode) {
        this.accountId = accountId;
        this.beezUPOrderId = beezUPOrderId;
        this.marketplaceTechnicalCode = marketplaceTechnicalCode;
  }
}
