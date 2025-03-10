/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;



/**
 * Destiny2AwaProvideAuthorizationResult200Wildcard - Look at the Response property for more information about the nature of this response
 */
public class Destiny2AwaProvideAuthorizationResult200Wildcard {
    
    public String detailedErrorTrace;

    public Destiny2AwaProvideAuthorizationResult200Wildcard withDetailedErrorTrace(String detailedErrorTrace) {
        this.detailedErrorTrace = detailedErrorTrace;
        return this;
    }
    
    
    public Integer errorCode;

    public Destiny2AwaProvideAuthorizationResult200Wildcard withErrorCode(Integer errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    
    
    public String errorStatus;

    public Destiny2AwaProvideAuthorizationResult200Wildcard withErrorStatus(String errorStatus) {
        this.errorStatus = errorStatus;
        return this;
    }
    
    
    public String message;

    public Destiny2AwaProvideAuthorizationResult200Wildcard withMessage(String message) {
        this.message = message;
        return this;
    }
    
    
    public java.util.Map<String, String> messageData;

    public Destiny2AwaProvideAuthorizationResult200Wildcard withMessageData(java.util.Map<String, String> messageData) {
        this.messageData = messageData;
        return this;
    }
    
    
    public Integer response;

    public Destiny2AwaProvideAuthorizationResult200Wildcard withResponse(Integer response) {
        this.response = response;
        return this;
    }
    
    
    public Integer throttleSeconds;

    public Destiny2AwaProvideAuthorizationResult200Wildcard withThrottleSeconds(Integer throttleSeconds) {
        this.throttleSeconds = throttleSeconds;
        return this;
    }
    
    public Destiny2AwaProvideAuthorizationResult200Wildcard(){}
}
