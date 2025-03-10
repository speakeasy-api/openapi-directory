/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class OauthAuthorizationsUpdateAuthorizationRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public OauthAuthorizationsUpdateAuthorizationRequestBody requestBody;

    public OauthAuthorizationsUpdateAuthorizationRequest withRequestBody(OauthAuthorizationsUpdateAuthorizationRequestBody requestBody) {
        this.requestBody = requestBody;
        return this;
    }
    
    /**
     * authorization_id parameter
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=authorization_id")
    public Long authorizationId;

    public OauthAuthorizationsUpdateAuthorizationRequest withAuthorizationId(Long authorizationId) {
        this.authorizationId = authorizationId;
        return this;
    }
    
    public OauthAuthorizationsUpdateAuthorizationRequest(@JsonProperty("authorization_id") Long authorizationId) {
        this.authorizationId = authorizationId;
  }
}
