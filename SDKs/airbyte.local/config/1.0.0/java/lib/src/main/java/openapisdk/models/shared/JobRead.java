package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class JobRead {
    @JsonProperty("configId")
    public String configId;
    public JobRead withConfigId(String configId) {
        this.configId = configId;
        return this;
    }
    @JsonProperty("configType")
    public JobConfigTypeEnum configType;
    public JobRead withConfigType(JobConfigTypeEnum configType) {
        this.configType = configType;
        return this;
    }
    @JsonProperty("createdAt")
    public Long createdAt;
    public JobRead withCreatedAt(Long createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public JobRead withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("status")
    public JobStatusEnum status;
    public JobRead withStatus(JobStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("updatedAt")
    public Long updatedAt;
    public JobRead withUpdatedAt(Long updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}