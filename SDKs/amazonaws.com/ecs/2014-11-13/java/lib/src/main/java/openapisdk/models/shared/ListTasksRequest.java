package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListTasksRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cluster")
    public String cluster;
    public ListTasksRequest withCluster(String cluster) {
        this.cluster = cluster;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containerInstance")
    public String containerInstance;
    public ListTasksRequest withContainerInstance(String containerInstance) {
        this.containerInstance = containerInstance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("desiredStatus")
    public DesiredStatusEnum desiredStatus;
    public ListTasksRequest withDesiredStatus(DesiredStatusEnum desiredStatus) {
        this.desiredStatus = desiredStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("family")
    public String family;
    public ListTasksRequest withFamily(String family) {
        this.family = family;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("launchType")
    public LaunchTypeEnum launchType;
    public ListTasksRequest withLaunchType(LaunchTypeEnum launchType) {
        this.launchType = launchType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public ListTasksRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListTasksRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceName")
    public String serviceName;
    public ListTasksRequest withServiceName(String serviceName) {
        this.serviceName = serviceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startedBy")
    public String startedBy;
    public ListTasksRequest withStartedBy(String startedBy) {
        this.startedBy = startedBy;
        return this;
    }
}