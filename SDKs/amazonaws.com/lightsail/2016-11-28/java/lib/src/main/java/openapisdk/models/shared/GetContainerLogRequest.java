package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetContainerLogRequest {
    @JsonProperty("containerName")
    public String containerName;
    public GetContainerLogRequest withContainerName(String containerName) {
        this.containerName = containerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("endTime")
    public OffsetDateTime endTime;
    public GetContainerLogRequest withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filterPattern")
    public String filterPattern;
    public GetContainerLogRequest withFilterPattern(String filterPattern) {
        this.filterPattern = filterPattern;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageToken")
    public String pageToken;
    public GetContainerLogRequest withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    @JsonProperty("serviceName")
    public String serviceName;
    public GetContainerLogRequest withServiceName(String serviceName) {
        this.serviceName = serviceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("startTime")
    public OffsetDateTime startTime;
    public GetContainerLogRequest withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
}