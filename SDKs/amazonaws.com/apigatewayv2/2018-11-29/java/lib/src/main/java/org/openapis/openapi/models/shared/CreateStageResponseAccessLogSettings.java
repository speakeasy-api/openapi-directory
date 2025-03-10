/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateStageResponseAccessLogSettings - Settings for logging access in this stage.
 */
public class CreateStageResponseAccessLogSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DestinationArn")
    public String destinationArn;

    public CreateStageResponseAccessLogSettings withDestinationArn(String destinationArn) {
        this.destinationArn = destinationArn;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Format")
    public String format;

    public CreateStageResponseAccessLogSettings withFormat(String format) {
        this.format = format;
        return this;
    }
    
    public CreateStageResponseAccessLogSettings(){}
}
