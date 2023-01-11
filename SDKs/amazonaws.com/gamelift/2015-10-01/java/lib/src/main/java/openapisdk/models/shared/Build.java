package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * Build
 * <p>Properties describing a custom game build.</p> <p> <b>Related actions</b> </p> <p> <a>CreateBuild</a> | <a>ListBuilds</a> | <a>DescribeBuild</a> | <a>UpdateBuild</a> | <a>DeleteBuild</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
**/
public class Build {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BuildArn")
    public String buildArn;
    public Build withBuildArn(String buildArn) {
        this.buildArn = buildArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BuildId")
    public String buildId;
    public Build withBuildId(String buildId) {
        this.buildId = buildId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreationTime")
    public OffsetDateTime creationTime;
    public Build withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public Build withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OperatingSystem")
    public OperatingSystemEnum operatingSystem;
    public Build withOperatingSystem(OperatingSystemEnum operatingSystem) {
        this.operatingSystem = operatingSystem;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SizeOnDisk")
    public Long sizeOnDisk;
    public Build withSizeOnDisk(Long sizeOnDisk) {
        this.sizeOnDisk = sizeOnDisk;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public BuildStatusEnum status;
    public Build withStatus(BuildStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Version")
    public String version;
    public Build withVersion(String version) {
        this.version = version;
        return this;
    }
}