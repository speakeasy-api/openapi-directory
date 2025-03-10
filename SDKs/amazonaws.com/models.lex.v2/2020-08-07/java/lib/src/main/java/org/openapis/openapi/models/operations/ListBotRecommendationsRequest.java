/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class ListBotRecommendationsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListBotRecommendationsRequestBody requestBody;

    public ListBotRecommendationsRequest withRequestBody(ListBotRecommendationsRequestBody requestBody) {
        this.requestBody = requestBody;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Algorithm")
    public String xAmzAlgorithm;

    public ListBotRecommendationsRequest withXAmzAlgorithm(String xAmzAlgorithm) {
        this.xAmzAlgorithm = xAmzAlgorithm;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Content-Sha256")
    public String xAmzContentSha256;

    public ListBotRecommendationsRequest withXAmzContentSha256(String xAmzContentSha256) {
        this.xAmzContentSha256 = xAmzContentSha256;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Credential")
    public String xAmzCredential;

    public ListBotRecommendationsRequest withXAmzCredential(String xAmzCredential) {
        this.xAmzCredential = xAmzCredential;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Date")
    public String xAmzDate;

    public ListBotRecommendationsRequest withXAmzDate(String xAmzDate) {
        this.xAmzDate = xAmzDate;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Security-Token")
    public String xAmzSecurityToken;

    public ListBotRecommendationsRequest withXAmzSecurityToken(String xAmzSecurityToken) {
        this.xAmzSecurityToken = xAmzSecurityToken;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Signature")
    public String xAmzSignature;

    public ListBotRecommendationsRequest withXAmzSignature(String xAmzSignature) {
        this.xAmzSignature = xAmzSignature;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-SignedHeaders")
    public String xAmzSignedHeaders;

    public ListBotRecommendationsRequest withXAmzSignedHeaders(String xAmzSignedHeaders) {
        this.xAmzSignedHeaders = xAmzSignedHeaders;
        return this;
    }
    
    /**
     * The unique identifier of the bot that contains the bot recommendation list.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=botId")
    public String botId;

    public ListBotRecommendationsRequest withBotId(String botId) {
        this.botId = botId;
        return this;
    }
    
    /**
     * The version of the bot that contains the bot recommendation list.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=botVersion")
    public String botVersion;

    public ListBotRecommendationsRequest withBotVersion(String botVersion) {
        this.botVersion = botVersion;
        return this;
    }
    
    /**
     * The identifier of the language and locale of the bot recommendation list.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=localeId")
    public String localeId;

    public ListBotRecommendationsRequest withLocaleId(String localeId) {
        this.localeId = localeId;
        return this;
    }
    
    /**
     * Pagination limit
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public String maxResults;

    public ListBotRecommendationsRequest withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    
    /**
     * Pagination token
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;

    public ListBotRecommendationsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    
    public ListBotRecommendationsRequest(@JsonProperty("RequestBody") ListBotRecommendationsRequestBody requestBody, @JsonProperty("botId") String botId, @JsonProperty("botVersion") String botVersion, @JsonProperty("localeId") String localeId) {
        this.requestBody = requestBody;
        this.botId = botId;
        this.botVersion = botVersion;
        this.localeId = localeId;
  }
}
