/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.time.OffsetDateTime;
import org.openapis.openapi.utils.DateTimeDeserializer;
import org.openapis.openapi.utils.DateTimeSerializer;

/**
 * NotebookSessionSummary - Contains the notebook session ID and notebook session creation time.
 */
public class NotebookSessionSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("CreationTime")
    public OffsetDateTime creationTime;

    public NotebookSessionSummary withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SessionId")
    public String sessionId;

    public NotebookSessionSummary withSessionId(String sessionId) {
        this.sessionId = sessionId;
        return this;
    }
    
    public NotebookSessionSummary(){}
}
