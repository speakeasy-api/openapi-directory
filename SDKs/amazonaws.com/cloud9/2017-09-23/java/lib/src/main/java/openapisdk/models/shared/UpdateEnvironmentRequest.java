package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateEnvironmentRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public UpdateEnvironmentRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("environmentId")
    public String environmentId;
    public UpdateEnvironmentRequest withEnvironmentId(String environmentId) {
        this.environmentId = environmentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("managedCredentialsAction")
    public ManagedCredentialsActionEnum managedCredentialsAction;
    public UpdateEnvironmentRequest withManagedCredentialsAction(ManagedCredentialsActionEnum managedCredentialsAction) {
        this.managedCredentialsAction = managedCredentialsAction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateEnvironmentRequest withName(String name) {
        this.name = name;
        return this;
    }
}