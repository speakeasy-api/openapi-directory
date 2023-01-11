package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RegisterJobDefinitionResponse {
    @JsonProperty("jobDefinitionArn")
    public String jobDefinitionArn;
    public RegisterJobDefinitionResponse withJobDefinitionArn(String jobDefinitionArn) {
        this.jobDefinitionArn = jobDefinitionArn;
        return this;
    }
    @JsonProperty("jobDefinitionName")
    public String jobDefinitionName;
    public RegisterJobDefinitionResponse withJobDefinitionName(String jobDefinitionName) {
        this.jobDefinitionName = jobDefinitionName;
        return this;
    }
    @JsonProperty("revision")
    public Long revision;
    public RegisterJobDefinitionResponse withRevision(Long revision) {
        this.revision = revision;
        return this;
    }
}