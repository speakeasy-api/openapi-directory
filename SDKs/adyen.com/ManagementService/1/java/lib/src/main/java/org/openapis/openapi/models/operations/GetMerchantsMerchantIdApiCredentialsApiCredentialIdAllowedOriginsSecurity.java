/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header,name=X-API-Key")
    public String apiKeyAuth;

    public GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsSecurity withApiKeyAuth(String apiKeyAuth) {
        this.apiKeyAuth = apiKeyAuth;
        return this;
    }
    
    @SpeakeasyMetadata("security:scheme=true,type=http,subtype=basic")
    public org.openapis.openapi.models.shared.SchemeBasicAuth basicAuth;

    public GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsSecurity withBasicAuth(org.openapis.openapi.models.shared.SchemeBasicAuth basicAuth) {
        this.basicAuth = basicAuth;
        return this;
    }
    
    public GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsSecurity(){}
}
