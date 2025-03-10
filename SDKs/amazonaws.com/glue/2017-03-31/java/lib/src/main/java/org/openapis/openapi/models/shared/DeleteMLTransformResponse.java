/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteMLTransformResponse - Success
 */
public class DeleteMLTransformResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TransformId")
    public String transformId;

    public DeleteMLTransformResponse withTransformId(String transformId) {
        this.transformId = transformId;
        return this;
    }
    
    public DeleteMLTransformResponse(){}
}
