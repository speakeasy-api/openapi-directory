package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SourceServer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public SourceServer withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataReplicationInfo")
    public DataReplicationInfo dataReplicationInfo;
    public SourceServer withDataReplicationInfo(DataReplicationInfo dataReplicationInfo) {
        this.dataReplicationInfo = dataReplicationInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isArchived")
    public Boolean isArchived;
    public SourceServer withIsArchived(Boolean isArchived) {
        this.isArchived = isArchived;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("launchedInstance")
    public LaunchedInstance launchedInstance;
    public SourceServer withLaunchedInstance(LaunchedInstance launchedInstance) {
        this.launchedInstance = launchedInstance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lifeCycle")
    public LifeCycle lifeCycle;
    public SourceServer withLifeCycle(LifeCycle lifeCycle) {
        this.lifeCycle = lifeCycle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceProperties")
    public SourceProperties sourceProperties;
    public SourceServer withSourceProperties(SourceProperties sourceProperties) {
        this.sourceProperties = sourceProperties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceServerID")
    public String sourceServerID;
    public SourceServer withSourceServerId(String sourceServerID) {
        this.sourceServerID = sourceServerID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public SourceServer withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}