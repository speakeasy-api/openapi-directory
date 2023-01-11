package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AttemptContainerDetail
 * An object representing the details of a container that's part of a job attempt.
**/
public class AttemptContainerDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containerInstanceArn")
    public String containerInstanceArn;
    public AttemptContainerDetail withContainerInstanceArn(String containerInstanceArn) {
        this.containerInstanceArn = containerInstanceArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exitCode")
    public Long exitCode;
    public AttemptContainerDetail withExitCode(Long exitCode) {
        this.exitCode = exitCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logStreamName")
    public String logStreamName;
    public AttemptContainerDetail withLogStreamName(String logStreamName) {
        this.logStreamName = logStreamName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkInterfaces")
    public NetworkInterface[] networkInterfaces;
    public AttemptContainerDetail withNetworkInterfaces(NetworkInterface[] networkInterfaces) {
        this.networkInterfaces = networkInterfaces;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public AttemptContainerDetail withReason(String reason) {
        this.reason = reason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskArn")
    public String taskArn;
    public AttemptContainerDetail withTaskArn(String taskArn) {
        this.taskArn = taskArn;
        return this;
    }
}