package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateAlertRequestBody {
    @JsonProperty("Action")
    public CreateAlertRequestBodyAction action;
    public CreateAlertRequestBody withAction(CreateAlertRequestBodyAction action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AlertDescription")
    public String alertDescription;
    public CreateAlertRequestBody withAlertDescription(String alertDescription) {
        this.alertDescription = alertDescription;
        return this;
    }
    @JsonProperty("AlertName")
    public String alertName;
    public CreateAlertRequestBody withAlertName(String alertName) {
        this.alertName = alertName;
        return this;
    }
    @JsonProperty("AlertSensitivityThreshold")
    public Long alertSensitivityThreshold;
    public CreateAlertRequestBody withAlertSensitivityThreshold(Long alertSensitivityThreshold) {
        this.alertSensitivityThreshold = alertSensitivityThreshold;
        return this;
    }
    @JsonProperty("AnomalyDetectorArn")
    public String anomalyDetectorArn;
    public CreateAlertRequestBody withAnomalyDetectorArn(String anomalyDetectorArn) {
        this.anomalyDetectorArn = anomalyDetectorArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public CreateAlertRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}