package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class CreateRobotApplicationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public CreateRobotApplicationResponse withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environment")
    public Environment environment;
    public CreateRobotApplicationResponse withEnvironment(Environment environment) {
        this.environment = environment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastUpdatedAt")
    public OffsetDateTime lastUpdatedAt;
    public CreateRobotApplicationResponse withLastUpdatedAt(OffsetDateTime lastUpdatedAt) {
        this.lastUpdatedAt = lastUpdatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CreateRobotApplicationResponse withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revisionId")
    public String revisionId;
    public CreateRobotApplicationResponse withRevisionId(String revisionId) {
        this.revisionId = revisionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("robotSoftwareSuite")
    public RobotSoftwareSuite robotSoftwareSuite;
    public CreateRobotApplicationResponse withRobotSoftwareSuite(RobotSoftwareSuite robotSoftwareSuite) {
        this.robotSoftwareSuite = robotSoftwareSuite;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sources")
    public Source[] sources;
    public CreateRobotApplicationResponse withSources(Source[] sources) {
        this.sources = sources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateRobotApplicationResponse withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public CreateRobotApplicationResponse withVersion(String version) {
        this.version = version;
        return this;
    }
}