package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class UploadSession {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("expires_at")
    public OffsetDateTime expiresAt;
    public UploadSession withExpiresAt(OffsetDateTime expiresAt) {
        this.expiresAt = expiresAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public UploadSession withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parallel_upload_supported")
    public Boolean parallelUploadSupported;
    public UploadSession withParallelUploadSupported(Boolean parallelUploadSupported) {
        this.parallelUploadSupported = parallelUploadSupported;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("part_size")
    public Double partSize;
    public UploadSession withPartSize(Double partSize) {
        this.partSize = partSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public UploadSession withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uploaded_byte_range")
    public String uploadedByteRange;
    public UploadSession withUploadedByteRange(String uploadedByteRange) {
        this.uploadedByteRange = uploadedByteRange;
        return this;
    }
}