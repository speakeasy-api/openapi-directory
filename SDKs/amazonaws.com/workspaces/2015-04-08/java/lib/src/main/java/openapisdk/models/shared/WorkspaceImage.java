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
 * WorkspaceImage
 * Describes a WorkSpace image.
**/
public class WorkspaceImage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("Created")
    public OffsetDateTime created;
    public WorkspaceImage withCreated(OffsetDateTime created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public WorkspaceImage withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorCode")
    public String errorCode;
    public WorkspaceImage withErrorCode(String errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorMessage")
    public String errorMessage;
    public WorkspaceImage withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ImageId")
    public String imageId;
    public WorkspaceImage withImageId(String imageId) {
        this.imageId = imageId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public WorkspaceImage withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OperatingSystem")
    public OperatingSystem operatingSystem;
    public WorkspaceImage withOperatingSystem(OperatingSystem operatingSystem) {
        this.operatingSystem = operatingSystem;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OwnerAccountId")
    public String ownerAccountId;
    public WorkspaceImage withOwnerAccountId(String ownerAccountId) {
        this.ownerAccountId = ownerAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RequiredTenancy")
    public WorkspaceImageRequiredTenancyEnum requiredTenancy;
    public WorkspaceImage withRequiredTenancy(WorkspaceImageRequiredTenancyEnum requiredTenancy) {
        this.requiredTenancy = requiredTenancy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("State")
    public WorkspaceImageStateEnum state;
    public WorkspaceImage withState(WorkspaceImageStateEnum state) {
        this.state = state;
        return this;
    }
}