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
 * LicenseOperationFailure
 * Describes the failure of a license operation.
**/
public class LicenseOperationFailure {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorMessage")
    public String errorMessage;
    public LicenseOperationFailure withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("FailureTime")
    public OffsetDateTime failureTime;
    public LicenseOperationFailure withFailureTime(OffsetDateTime failureTime) {
        this.failureTime = failureTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MetadataList")
    public Metadata[] metadataList;
    public LicenseOperationFailure withMetadataList(Metadata[] metadataList) {
        this.metadataList = metadataList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OperationName")
    public String operationName;
    public LicenseOperationFailure withOperationName(String operationName) {
        this.operationName = operationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OperationRequestedBy")
    public String operationRequestedBy;
    public LicenseOperationFailure withOperationRequestedBy(String operationRequestedBy) {
        this.operationRequestedBy = operationRequestedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceArn")
    public String resourceArn;
    public LicenseOperationFailure withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceOwnerId")
    public String resourceOwnerId;
    public LicenseOperationFailure withResourceOwnerId(String resourceOwnerId) {
        this.resourceOwnerId = resourceOwnerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceType")
    public ResourceTypeEnum resourceType;
    public LicenseOperationFailure withResourceType(ResourceTypeEnum resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}