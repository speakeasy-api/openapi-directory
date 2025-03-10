/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * NotificationDestinationConfig - The structure that contains the information required to deliver a notification to a customer.
 */
public class NotificationDestinationConfig {
    @JsonProperty("Uri")
    public String uri;

    public NotificationDestinationConfig withUri(String uri) {
        this.uri = uri;
        return this;
    }
    
    public NotificationDestinationConfig(@JsonProperty("Uri") String uri) {
        this.uri = uri;
  }
}
