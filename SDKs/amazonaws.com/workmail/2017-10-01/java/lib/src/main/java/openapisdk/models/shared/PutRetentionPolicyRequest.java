package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutRetentionPolicyRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public PutRetentionPolicyRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("FolderConfigurations")
    public FolderConfiguration[] folderConfigurations;
    public PutRetentionPolicyRequest withFolderConfigurations(FolderConfiguration[] folderConfigurations) {
        this.folderConfigurations = folderConfigurations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public PutRetentionPolicyRequest withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public PutRetentionPolicyRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("OrganizationId")
    public String organizationId;
    public PutRetentionPolicyRequest withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}