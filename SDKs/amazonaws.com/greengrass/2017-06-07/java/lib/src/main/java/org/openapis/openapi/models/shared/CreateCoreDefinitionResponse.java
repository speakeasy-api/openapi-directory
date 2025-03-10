/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateCoreDefinitionResponse - Success
 */
public class CreateCoreDefinitionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Arn")
    public String arn;

    public CreateCoreDefinitionResponse withArn(String arn) {
        this.arn = arn;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreationTimestamp")
    public String creationTimestamp;

    public CreateCoreDefinitionResponse withCreationTimestamp(String creationTimestamp) {
        this.creationTimestamp = creationTimestamp;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;

    public CreateCoreDefinitionResponse withId(String id) {
        this.id = id;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastUpdatedTimestamp")
    public String lastUpdatedTimestamp;

    public CreateCoreDefinitionResponse withLastUpdatedTimestamp(String lastUpdatedTimestamp) {
        this.lastUpdatedTimestamp = lastUpdatedTimestamp;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LatestVersion")
    public String latestVersion;

    public CreateCoreDefinitionResponse withLatestVersion(String latestVersion) {
        this.latestVersion = latestVersion;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LatestVersionArn")
    public String latestVersionArn;

    public CreateCoreDefinitionResponse withLatestVersionArn(String latestVersionArn) {
        this.latestVersionArn = latestVersionArn;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;

    public CreateCoreDefinitionResponse withName(String name) {
        this.name = name;
        return this;
    }
    
    public CreateCoreDefinitionResponse(){}
}
