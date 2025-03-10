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
 * GetWorkspaceResponse - Success
 */
public class GetWorkspaceResponse {
    @JsonProperty("arn")
    public String arn;

    public GetWorkspaceResponse withArn(String arn) {
        this.arn = arn;
        return this;
    }
    
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("creationDateTime")
    public OffsetDateTime creationDateTime;

    public GetWorkspaceResponse withCreationDateTime(OffsetDateTime creationDateTime) {
        this.creationDateTime = creationDateTime;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;

    public GetWorkspaceResponse withDescription(String description) {
        this.description = description;
        return this;
    }
    
    @JsonProperty("role")
    public String role;

    public GetWorkspaceResponse withRole(String role) {
        this.role = role;
        return this;
    }
    
    @JsonProperty("s3Location")
    public String s3Location;

    public GetWorkspaceResponse withS3Location(String s3Location) {
        this.s3Location = s3Location;
        return this;
    }
    
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("updateDateTime")
    public OffsetDateTime updateDateTime;

    public GetWorkspaceResponse withUpdateDateTime(OffsetDateTime updateDateTime) {
        this.updateDateTime = updateDateTime;
        return this;
    }
    
    @JsonProperty("workspaceId")
    public String workspaceId;

    public GetWorkspaceResponse withWorkspaceId(String workspaceId) {
        this.workspaceId = workspaceId;
        return this;
    }
    
    public GetWorkspaceResponse(@JsonProperty("arn") String arn, @JsonProperty("creationDateTime") OffsetDateTime creationDateTime, @JsonProperty("role") String role, @JsonProperty("s3Location") String s3Location, @JsonProperty("updateDateTime") OffsetDateTime updateDateTime, @JsonProperty("workspaceId") String workspaceId) {
        this.arn = arn;
        this.creationDateTime = creationDateTime;
        this.role = role;
        this.s3Location = s3Location;
        this.updateDateTime = updateDateTime;
        this.workspaceId = workspaceId;
  }
}
