/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SetDefaultSenderIdRequest {
    @JsonProperty("ConfigurationSetName")
    public String configurationSetName;

    public SetDefaultSenderIdRequest withConfigurationSetName(String configurationSetName) {
        this.configurationSetName = configurationSetName;
        return this;
    }
    
    @JsonProperty("SenderId")
    public String senderId;

    public SetDefaultSenderIdRequest withSenderId(String senderId) {
        this.senderId = senderId;
        return this;
    }
    
    public SetDefaultSenderIdRequest(@JsonProperty("ConfigurationSetName") String configurationSetName, @JsonProperty("SenderId") String senderId) {
        this.configurationSetName = configurationSetName;
        this.senderId = senderId;
  }
}
