package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetUploadStatusResponse {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("createdDate")
    public OffsetDateTime createdDate;
    public GetUploadStatusResponse withCreatedDate(OffsetDateTime createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureReason")
    public String[] failureReason;
    public GetUploadStatusResponse withFailureReason(String[] failureReason) {
        this.failureReason = failureReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("namespaceArn")
    public String namespaceArn;
    public GetUploadStatusResponse withNamespaceArn(String namespaceArn) {
        this.namespaceArn = namespaceArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("namespaceName")
    public String namespaceName;
    public GetUploadStatusResponse withNamespaceName(String namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("namespaceVersion")
    public Long namespaceVersion;
    public GetUploadStatusResponse withNamespaceVersion(Long namespaceVersion) {
        this.namespaceVersion = namespaceVersion;
        return this;
    }
    @JsonProperty("uploadId")
    public String uploadId;
    public GetUploadStatusResponse withUploadId(String uploadId) {
        this.uploadId = uploadId;
        return this;
    }
    @JsonProperty("uploadStatus")
    public UploadStatusEnum uploadStatus;
    public GetUploadStatusResponse withUploadStatus(UploadStatusEnum uploadStatus) {
        this.uploadStatus = uploadStatus;
        return this;
    }
}