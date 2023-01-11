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
 * Alert
 * A configuration for Amazon SNS-integrated notifications.
**/
public class Alert {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Action")
    public Action action;
    public Alert withAction(Action action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AlertArn")
    public String alertArn;
    public Alert withAlertArn(String alertArn) {
        this.alertArn = alertArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AlertDescription")
    public String alertDescription;
    public Alert withAlertDescription(String alertDescription) {
        this.alertDescription = alertDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AlertName")
    public String alertName;
    public Alert withAlertName(String alertName) {
        this.alertName = alertName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AlertSensitivityThreshold")
    public Long alertSensitivityThreshold;
    public Alert withAlertSensitivityThreshold(Long alertSensitivityThreshold) {
        this.alertSensitivityThreshold = alertSensitivityThreshold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AlertStatus")
    public AlertStatusEnum alertStatus;
    public Alert withAlertStatus(AlertStatusEnum alertStatus) {
        this.alertStatus = alertStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AlertType")
    public AlertTypeEnum alertType;
    public Alert withAlertType(AlertTypeEnum alertType) {
        this.alertType = alertType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AnomalyDetectorArn")
    public String anomalyDetectorArn;
    public Alert withAnomalyDetectorArn(String anomalyDetectorArn) {
        this.anomalyDetectorArn = anomalyDetectorArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreationTime")
    public OffsetDateTime creationTime;
    public Alert withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastModificationTime")
    public OffsetDateTime lastModificationTime;
    public Alert withLastModificationTime(OffsetDateTime lastModificationTime) {
        this.lastModificationTime = lastModificationTime;
        return this;
    }
}