package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateWorkspaceRequestBodyWorkspace {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collections")
    public UpdateWorkspaceRequestBodyWorkspaceCollections[] collections;
    public UpdateWorkspaceRequestBodyWorkspace withCollections(UpdateWorkspaceRequestBodyWorkspaceCollections[] collections) {
        this.collections = collections;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public UpdateWorkspaceRequestBodyWorkspace withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environments")
    public UpdateWorkspaceRequestBodyWorkspaceEnvironments[] environments;
    public UpdateWorkspaceRequestBodyWorkspace withEnvironments(UpdateWorkspaceRequestBodyWorkspaceEnvironments[] environments) {
        this.environments = environments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mocks")
    public UpdateWorkspaceRequestBodyWorkspaceMocks[] mocks;
    public UpdateWorkspaceRequestBodyWorkspace withMocks(UpdateWorkspaceRequestBodyWorkspaceMocks[] mocks) {
        this.mocks = mocks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("monitors")
    public UpdateWorkspaceRequestBodyWorkspaceMonitors[] monitors;
    public UpdateWorkspaceRequestBodyWorkspace withMonitors(UpdateWorkspaceRequestBodyWorkspaceMonitors[] monitors) {
        this.monitors = monitors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateWorkspaceRequestBodyWorkspace withName(String name) {
        this.name = name;
        return this;
    }
}