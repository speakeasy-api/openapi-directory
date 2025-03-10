/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ProjectsMoveCard403ApplicationJSON - Forbidden
 */
public class ProjectsMoveCard403ApplicationJSON {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documentation_url")
    public String documentationUrl;

    public ProjectsMoveCard403ApplicationJSON withDocumentationUrl(String documentationUrl) {
        this.documentationUrl = documentationUrl;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public ProjectsMoveCard403ApplicationJSONErrors[] errors;

    public ProjectsMoveCard403ApplicationJSON withErrors(ProjectsMoveCard403ApplicationJSONErrors[] errors) {
        this.errors = errors;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;

    public ProjectsMoveCard403ApplicationJSON withMessage(String message) {
        this.message = message;
        return this;
    }
    
    public ProjectsMoveCard403ApplicationJSON(){}
}
