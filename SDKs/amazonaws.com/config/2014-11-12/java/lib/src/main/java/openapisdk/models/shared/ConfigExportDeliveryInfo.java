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
 * ConfigExportDeliveryInfo
 * Provides status of the delivery of the snapshot or the configuration history to the specified Amazon S3 bucket. Also provides the status of notifications about the Amazon S3 delivery to the specified Amazon SNS topic.
**/
public class ConfigExportDeliveryInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastAttemptTime")
    public OffsetDateTime lastAttemptTime;
    public ConfigExportDeliveryInfo withLastAttemptTime(OffsetDateTime lastAttemptTime) {
        this.lastAttemptTime = lastAttemptTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastErrorCode")
    public String lastErrorCode;
    public ConfigExportDeliveryInfo withLastErrorCode(String lastErrorCode) {
        this.lastErrorCode = lastErrorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastErrorMessage")
    public String lastErrorMessage;
    public ConfigExportDeliveryInfo withLastErrorMessage(String lastErrorMessage) {
        this.lastErrorMessage = lastErrorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastStatus")
    public DeliveryStatusEnum lastStatus;
    public ConfigExportDeliveryInfo withLastStatus(DeliveryStatusEnum lastStatus) {
        this.lastStatus = lastStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastSuccessfulTime")
    public OffsetDateTime lastSuccessfulTime;
    public ConfigExportDeliveryInfo withLastSuccessfulTime(OffsetDateTime lastSuccessfulTime) {
        this.lastSuccessfulTime = lastSuccessfulTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("nextDeliveryTime")
    public OffsetDateTime nextDeliveryTime;
    public ConfigExportDeliveryInfo withNextDeliveryTime(OffsetDateTime nextDeliveryTime) {
        this.nextDeliveryTime = nextDeliveryTime;
        return this;
    }
}