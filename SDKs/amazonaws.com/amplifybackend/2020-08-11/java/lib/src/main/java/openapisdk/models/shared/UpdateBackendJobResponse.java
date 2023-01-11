package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateBackendJobResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AppId")
    public java.util.Map<String, Object> appId;
    public UpdateBackendJobResponse withAppId(java.util.Map<String, Object> appId) {
        this.appId = appId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BackendEnvironmentName")
    public java.util.Map<String, Object> backendEnvironmentName;
    public UpdateBackendJobResponse withBackendEnvironmentName(java.util.Map<String, Object> backendEnvironmentName) {
        this.backendEnvironmentName = backendEnvironmentName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreateTime")
    public java.util.Map<String, Object> createTime;
    public UpdateBackendJobResponse withCreateTime(java.util.Map<String, Object> createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Error")
    public java.util.Map<String, Object> error;
    public UpdateBackendJobResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobId")
    public java.util.Map<String, Object> jobId;
    public UpdateBackendJobResponse withJobId(java.util.Map<String, Object> jobId) {
        this.jobId = jobId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Operation")
    public java.util.Map<String, Object> operation;
    public UpdateBackendJobResponse withOperation(java.util.Map<String, Object> operation) {
        this.operation = operation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public java.util.Map<String, Object> status;
    public UpdateBackendJobResponse withStatus(java.util.Map<String, Object> status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UpdateTime")
    public java.util.Map<String, Object> updateTime;
    public UpdateBackendJobResponse withUpdateTime(java.util.Map<String, Object> updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}