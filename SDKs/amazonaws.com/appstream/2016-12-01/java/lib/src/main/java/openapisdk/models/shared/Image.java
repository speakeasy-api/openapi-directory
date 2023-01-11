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
 * Image
 * Describes an image.
**/
public class Image {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Applications")
    public Application[] applications;
    public Image withApplications(Application[] applications) {
        this.applications = applications;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AppstreamAgentVersion")
    public String appstreamAgentVersion;
    public Image withAppstreamAgentVersion(String appstreamAgentVersion) {
        this.appstreamAgentVersion = appstreamAgentVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Arn")
    public String arn;
    public Image withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BaseImageArn")
    public String baseImageArn;
    public Image withBaseImageArn(String baseImageArn) {
        this.baseImageArn = baseImageArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreatedTime")
    public OffsetDateTime createdTime;
    public Image withCreatedTime(OffsetDateTime createdTime) {
        this.createdTime = createdTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public Image withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DisplayName")
    public String displayName;
    public Image withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ImageBuilderName")
    public String imageBuilderName;
    public Image withImageBuilderName(String imageBuilderName) {
        this.imageBuilderName = imageBuilderName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ImageBuilderSupported")
    public Boolean imageBuilderSupported;
    public Image withImageBuilderSupported(Boolean imageBuilderSupported) {
        this.imageBuilderSupported = imageBuilderSupported;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ImageErrors")
    public ResourceError[] imageErrors;
    public Image withImageErrors(ResourceError[] imageErrors) {
        this.imageErrors = imageErrors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ImagePermissions")
    public ImagePermissions imagePermissions;
    public Image withImagePermissions(ImagePermissions imagePermissions) {
        this.imagePermissions = imagePermissions;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public Image withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Platform")
    public PlatformTypeEnum platform;
    public Image withPlatform(PlatformTypeEnum platform) {
        this.platform = platform;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("PublicBaseImageReleasedDate")
    public OffsetDateTime publicBaseImageReleasedDate;
    public Image withPublicBaseImageReleasedDate(OffsetDateTime publicBaseImageReleasedDate) {
        this.publicBaseImageReleasedDate = publicBaseImageReleasedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("State")
    public ImageStateEnum state;
    public Image withState(ImageStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StateChangeReason")
    public ImageStateChangeReason stateChangeReason;
    public Image withStateChangeReason(ImageStateChangeReason stateChangeReason) {
        this.stateChangeReason = stateChangeReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Visibility")
    public VisibilityTypeEnum visibility;
    public Image withVisibility(VisibilityTypeEnum visibility) {
        this.visibility = visibility;
        return this;
    }
}