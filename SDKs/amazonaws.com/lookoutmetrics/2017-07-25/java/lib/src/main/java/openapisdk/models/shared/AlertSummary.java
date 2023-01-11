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
 * AlertSummary
 * Provides a summary of an alert's configuration.
**/
public class AlertSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AlertArn")
    public String alertArn;
    public AlertSummary withAlertArn(String alertArn) {
        this.alertArn = alertArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AlertName")
    public String alertName;
    public AlertSummary withAlertName(String alertName) {
        this.alertName = alertName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AlertSensitivityThreshold")
    public Long alertSensitivityThreshold;
    public AlertSummary withAlertSensitivityThreshold(Long alertSensitivityThreshold) {
        this.alertSensitivityThreshold = alertSensitivityThreshold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AlertStatus")
    public AlertStatusEnum alertStatus;
    public AlertSummary withAlertStatus(AlertStatusEnum alertStatus) {
        this.alertStatus = alertStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AlertType")
    public AlertTypeEnum alertType;
    public AlertSummary withAlertType(AlertTypeEnum alertType) {
        this.alertType = alertType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AnomalyDetectorArn")
    public String anomalyDetectorArn;
    public AlertSummary withAnomalyDetectorArn(String anomalyDetectorArn) {
        this.anomalyDetectorArn = anomalyDetectorArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreationTime")
    public OffsetDateTime creationTime;
    public AlertSummary withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastModificationTime")
    public OffsetDateTime lastModificationTime;
    public AlertSummary withLastModificationTime(OffsetDateTime lastModificationTime) {
        this.lastModificationTime = lastModificationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public AlertSummary withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}