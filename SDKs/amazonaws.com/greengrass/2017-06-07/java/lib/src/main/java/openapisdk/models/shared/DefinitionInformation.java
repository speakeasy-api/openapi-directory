package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DefinitionInformation
 * Information about a definition.
**/
public class DefinitionInformation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Arn")
    public String arn;
    public DefinitionInformation withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreationTimestamp")
    public String creationTimestamp;
    public DefinitionInformation withCreationTimestamp(String creationTimestamp) {
        this.creationTimestamp = creationTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public DefinitionInformation withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastUpdatedTimestamp")
    public String lastUpdatedTimestamp;
    public DefinitionInformation withLastUpdatedTimestamp(String lastUpdatedTimestamp) {
        this.lastUpdatedTimestamp = lastUpdatedTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LatestVersion")
    public String latestVersion;
    public DefinitionInformation withLatestVersion(String latestVersion) {
        this.latestVersion = latestVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LatestVersionArn")
    public String latestVersionArn;
    public DefinitionInformation withLatestVersionArn(String latestVersionArn) {
        this.latestVersionArn = latestVersionArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public DefinitionInformation withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public DefinitionInformation withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}