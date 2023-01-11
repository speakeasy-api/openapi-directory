package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DescribeCustomPluginResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("creationTime")
    public OffsetDateTime creationTime;
    public DescribeCustomPluginResponse withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customPluginArn")
    public String customPluginArn;
    public DescribeCustomPluginResponse withCustomPluginArn(String customPluginArn) {
        this.customPluginArn = customPluginArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customPluginState")
    public CustomPluginStateEnum customPluginState;
    public DescribeCustomPluginResponse withCustomPluginState(CustomPluginStateEnum customPluginState) {
        this.customPluginState = customPluginState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public DescribeCustomPluginResponse withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latestRevision")
    public CustomPluginRevisionSummary latestRevision;
    public DescribeCustomPluginResponse withLatestRevision(CustomPluginRevisionSummary latestRevision) {
        this.latestRevision = latestRevision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public DescribeCustomPluginResponse withName(String name) {
        this.name = name;
        return this;
    }
}