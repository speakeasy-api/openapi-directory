/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class TwilioMessagePostTwilioPostRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public org.openapis.openapi.models.shared.TwilioMessageRequest twilioMessageRequest;

    public TwilioMessagePostTwilioPostRequest withTwilioMessageRequest(org.openapis.openapi.models.shared.TwilioMessageRequest twilioMessageRequest) {
        this.twilioMessageRequest = twilioMessageRequest;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=authorization")
    public String authorization;

    public TwilioMessagePostTwilioPostRequest withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
    
    public TwilioMessagePostTwilioPostRequest(@JsonProperty("TwilioMessageRequest") org.openapis.openapi.models.shared.TwilioMessageRequest twilioMessageRequest) {
        this.twilioMessageRequest = twilioMessageRequest;
  }
}
