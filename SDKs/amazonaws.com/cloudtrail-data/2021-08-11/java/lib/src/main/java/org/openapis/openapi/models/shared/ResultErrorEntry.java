/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ResultErrorEntry - Includes the error code and error message for events that could not be ingested by CloudTrail.
 */
public class ResultErrorEntry {
    @JsonProperty("errorCode")
    public String errorCode;

    public ResultErrorEntry withErrorCode(String errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    
    @JsonProperty("errorMessage")
    public String errorMessage;

    public ResultErrorEntry withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    
    @JsonProperty("id")
    public String id;

    public ResultErrorEntry withId(String id) {
        this.id = id;
        return this;
    }
    
    public ResultErrorEntry(@JsonProperty("errorCode") String errorCode, @JsonProperty("errorMessage") String errorMessage, @JsonProperty("id") String id) {
        this.errorCode = errorCode;
        this.errorMessage = errorMessage;
        this.id = id;
  }
}
