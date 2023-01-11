package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDefaultRetentionPolicyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public GetDefaultRetentionPolicyResponse withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FolderConfigurations")
    public FolderConfiguration[] folderConfigurations;
    public GetDefaultRetentionPolicyResponse withFolderConfigurations(FolderConfiguration[] folderConfigurations) {
        this.folderConfigurations = folderConfigurations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public GetDefaultRetentionPolicyResponse withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public GetDefaultRetentionPolicyResponse withName(String name) {
        this.name = name;
        return this;
    }
}