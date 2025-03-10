/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.callbacks;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateMediaMediaProcessingFinishedRequestBodyPayloadIncluded1 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public CreateMediaMediaProcessingFinishedRequestBodyPayloadIncluded1Attributes attributes;

    public CreateMediaMediaProcessingFinishedRequestBodyPayloadIncluded1 withAttributes(CreateMediaMediaProcessingFinishedRequestBodyPayloadIncluded1Attributes attributes) {
        this.attributes = attributes;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;

    public CreateMediaMediaProcessingFinishedRequestBodyPayloadIncluded1 withId(String id) {
        this.id = id;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relationships")
    public CreateMediaMediaProcessingFinishedRequestBodyPayloadIncluded1Relationships relationships;

    public CreateMediaMediaProcessingFinishedRequestBodyPayloadIncluded1 withRelationships(CreateMediaMediaProcessingFinishedRequestBodyPayloadIncluded1Relationships relationships) {
        this.relationships = relationships;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;

    public CreateMediaMediaProcessingFinishedRequestBodyPayloadIncluded1 withType(String type) {
        this.type = type;
        return this;
    }
    
    public CreateMediaMediaProcessingFinishedRequestBodyPayloadIncluded1(){}
}
