package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ImageSummary
 * An image summary.
**/
public class ImageSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public ImageSummary withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateCreated")
    public String dateCreated;
    public ImageSummary withDateCreated(String dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ImageSummary withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("osVersion")
    public String osVersion;
    public ImageSummary withOsVersion(String osVersion) {
        this.osVersion = osVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputResources")
    public OutputResources outputResources;
    public ImageSummary withOutputResources(OutputResources outputResources) {
        this.outputResources = outputResources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("owner")
    public String owner;
    public ImageSummary withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platform")
    public PlatformEnum platform;
    public ImageSummary withPlatform(PlatformEnum platform) {
        this.platform = platform;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public ImageState state;
    public ImageSummary withState(ImageState state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public ImageSummary withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ImageTypeEnum type;
    public ImageSummary withType(ImageTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public ImageSummary withVersion(String version) {
        this.version = version;
        return this;
    }
}