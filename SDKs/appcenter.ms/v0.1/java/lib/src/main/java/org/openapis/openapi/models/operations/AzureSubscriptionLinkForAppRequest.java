/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class AzureSubscriptionLinkForAppRequest {
    /**
     * The azure subscription data needed to be link to the app.
     */
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AzureSubscriptionLinkForAppRequestBody requestBody;

    public AzureSubscriptionLinkForAppRequest withRequestBody(AzureSubscriptionLinkForAppRequestBody requestBody) {
        this.requestBody = requestBody;
        return this;
    }
    
    /**
     * The name of the application
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=app_name")
    public String appName;

    public AzureSubscriptionLinkForAppRequest withAppName(String appName) {
        this.appName = appName;
        return this;
    }
    
    /**
     * The name of the owner
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner_name")
    public String ownerName;

    public AzureSubscriptionLinkForAppRequest withOwnerName(String ownerName) {
        this.ownerName = ownerName;
        return this;
    }
    
    public AzureSubscriptionLinkForAppRequest(@JsonProperty("RequestBody") AzureSubscriptionLinkForAppRequestBody requestBody, @JsonProperty("app_name") String appName, @JsonProperty("owner_name") String ownerName) {
        this.requestBody = requestBody;
        this.appName = appName;
        this.ownerName = ownerName;
  }
}
