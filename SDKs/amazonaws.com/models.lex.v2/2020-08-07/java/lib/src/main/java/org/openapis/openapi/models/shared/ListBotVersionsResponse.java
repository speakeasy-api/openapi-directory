/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListBotVersionsResponse - Success
 */
public class ListBotVersionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("botId")
    public String botId;

    public ListBotVersionsResponse withBotId(String botId) {
        this.botId = botId;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("botVersionSummaries")
    public BotVersionSummary[] botVersionSummaries;

    public ListBotVersionsResponse withBotVersionSummaries(BotVersionSummary[] botVersionSummaries) {
        this.botVersionSummaries = botVersionSummaries;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;

    public ListBotVersionsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    
    public ListBotVersionsResponse(){}
}
