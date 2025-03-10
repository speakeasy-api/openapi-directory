/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VaultNotificationConfig - Represents a vault's notification configuration.
 */
public class VaultNotificationConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Events")
    public String[] events;

    public VaultNotificationConfig withEvents(String[] events) {
        this.events = events;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SNSTopic")
    public String snsTopic;

    public VaultNotificationConfig withSNSTopic(String snsTopic) {
        this.snsTopic = snsTopic;
        return this;
    }
    
    public VaultNotificationConfig(){}
}
