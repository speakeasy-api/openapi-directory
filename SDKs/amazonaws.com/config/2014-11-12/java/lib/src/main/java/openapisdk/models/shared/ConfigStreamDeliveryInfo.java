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
 * ConfigStreamDeliveryInfo
 * A list that contains the status of the delivery of the configuration stream notification to the Amazon SNS topic.
**/
public class ConfigStreamDeliveryInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastErrorCode")
    public String lastErrorCode;
    public ConfigStreamDeliveryInfo withLastErrorCode(String lastErrorCode) {
        this.lastErrorCode = lastErrorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastErrorMessage")
    public String lastErrorMessage;
    public ConfigStreamDeliveryInfo withLastErrorMessage(String lastErrorMessage) {
        this.lastErrorMessage = lastErrorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastStatus")
    public DeliveryStatusEnum lastStatus;
    public ConfigStreamDeliveryInfo withLastStatus(DeliveryStatusEnum lastStatus) {
        this.lastStatus = lastStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastStatusChangeTime")
    public OffsetDateTime lastStatusChangeTime;
    public ConfigStreamDeliveryInfo withLastStatusChangeTime(OffsetDateTime lastStatusChangeTime) {
        this.lastStatusChangeTime = lastStatusChangeTime;
        return this;
    }
}