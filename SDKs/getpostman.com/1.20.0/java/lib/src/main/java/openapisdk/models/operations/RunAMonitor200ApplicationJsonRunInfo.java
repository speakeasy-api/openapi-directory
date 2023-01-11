package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RunAMonitor200ApplicationJsonRunInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collectionUid")
    public String collectionUid;
    public RunAMonitor200ApplicationJsonRunInfo withCollectionUid(String collectionUid) {
        this.collectionUid = collectionUid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("finishedAt")
    public String finishedAt;
    public RunAMonitor200ApplicationJsonRunInfo withFinishedAt(String finishedAt) {
        this.finishedAt = finishedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobId")
    public String jobId;
    public RunAMonitor200ApplicationJsonRunInfo withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("monitorId")
    public String monitorId;
    public RunAMonitor200ApplicationJsonRunInfo withMonitorId(String monitorId) {
        this.monitorId = monitorId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public RunAMonitor200ApplicationJsonRunInfo withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startedAt")
    public String startedAt;
    public RunAMonitor200ApplicationJsonRunInfo withStartedAt(String startedAt) {
        this.startedAt = startedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public RunAMonitor200ApplicationJsonRunInfo withStatus(String status) {
        this.status = status;
        return this;
    }
}