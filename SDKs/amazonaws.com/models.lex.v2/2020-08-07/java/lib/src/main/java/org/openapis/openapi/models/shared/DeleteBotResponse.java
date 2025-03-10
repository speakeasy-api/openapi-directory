/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteBotResponse - Success
 */
public class DeleteBotResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("botId")
    public String botId;

    public DeleteBotResponse withBotId(String botId) {
        this.botId = botId;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("botStatus")
    public BotStatusEnum botStatus;

    public DeleteBotResponse withBotStatus(BotStatusEnum botStatus) {
        this.botStatus = botStatus;
        return this;
    }
    
    public DeleteBotResponse(){}
}
