package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class RegionInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sseKmsKeyId")
    public String sseKmsKeyId;
    public RegionInfo withSseKmsKeyId(String sseKmsKeyId) {
        this.sseKmsKeyId = sseKmsKeyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public RegionStatusEnum status;
    public RegionInfo withStatus(RegionStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusMessage")
    public String statusMessage;
    public RegionInfo withStatusMessage(String statusMessage) {
        this.statusMessage = statusMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("statusUpdateDateTime")
    public OffsetDateTime statusUpdateDateTime;
    public RegionInfo withStatusUpdateDateTime(OffsetDateTime statusUpdateDateTime) {
        this.statusUpdateDateTime = statusUpdateDateTime;
        return this;
    }
}