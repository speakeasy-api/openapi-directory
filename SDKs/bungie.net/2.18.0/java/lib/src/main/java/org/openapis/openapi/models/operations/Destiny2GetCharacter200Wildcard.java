/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;



/**
 * Destiny2GetCharacter200Wildcard - The response contract for GetDestinyCharacter, with components that can be returned for character and item-level data.
 */
public class Destiny2GetCharacter200Wildcard {
    
    public String detailedErrorTrace;

    public Destiny2GetCharacter200Wildcard withDetailedErrorTrace(String detailedErrorTrace) {
        this.detailedErrorTrace = detailedErrorTrace;
        return this;
    }
    
    
    public Integer errorCode;

    public Destiny2GetCharacter200Wildcard withErrorCode(Integer errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    
    
    public String errorStatus;

    public Destiny2GetCharacter200Wildcard withErrorStatus(String errorStatus) {
        this.errorStatus = errorStatus;
        return this;
    }
    
    
    public String message;

    public Destiny2GetCharacter200Wildcard withMessage(String message) {
        this.message = message;
        return this;
    }
    
    
    public java.util.Map<String, String> messageData;

    public Destiny2GetCharacter200Wildcard withMessageData(java.util.Map<String, String> messageData) {
        this.messageData = messageData;
        return this;
    }
    
    /**
     * The response contract for GetDestinyCharacter, with components that can be returned for character and item-level data.
     */
    
    public org.openapis.openapi.models.shared.DestinyResponsesDestinyCharacterResponse response;

    public Destiny2GetCharacter200Wildcard withResponse(org.openapis.openapi.models.shared.DestinyResponsesDestinyCharacterResponse response) {
        this.response = response;
        return this;
    }
    
    
    public Integer throttleSeconds;

    public Destiny2GetCharacter200Wildcard withThrottleSeconds(Integer throttleSeconds) {
        this.throttleSeconds = throttleSeconds;
        return this;
    }
    
    public Destiny2GetCharacter200Wildcard(){}
}
