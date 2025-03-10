/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class PostConfirmThirdPartySecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header,name=X-API-Key")
    public String apiKeyAuth;

    public PostConfirmThirdPartySecurity withApiKeyAuth(String apiKeyAuth) {
        this.apiKeyAuth = apiKeyAuth;
        return this;
    }
    
    @SpeakeasyMetadata("security:scheme=true,type=http,subtype=basic")
    public org.openapis.openapi.models.shared.SchemeBasicAuth basicAuth;

    public PostConfirmThirdPartySecurity withBasicAuth(org.openapis.openapi.models.shared.SchemeBasicAuth basicAuth) {
        this.basicAuth = basicAuth;
        return this;
    }
    
    public PostConfirmThirdPartySecurity(){}
}
