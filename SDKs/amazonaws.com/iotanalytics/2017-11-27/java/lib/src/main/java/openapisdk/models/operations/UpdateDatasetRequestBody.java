package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateDatasetRequestBody {
    @JsonProperty("actions")
    public openapisdk.models.shared.DatasetAction[] actions;
    public UpdateDatasetRequestBody withActions(openapisdk.models.shared.DatasetAction[] actions) {
        this.actions = actions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentDeliveryRules")
    public openapisdk.models.shared.DatasetContentDeliveryRule[] contentDeliveryRules;
    public UpdateDatasetRequestBody withContentDeliveryRules(openapisdk.models.shared.DatasetContentDeliveryRule[] contentDeliveryRules) {
        this.contentDeliveryRules = contentDeliveryRules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lateDataRules")
    public openapisdk.models.shared.LateDataRule[] lateDataRules;
    public UpdateDatasetRequestBody withLateDataRules(openapisdk.models.shared.LateDataRule[] lateDataRules) {
        this.lateDataRules = lateDataRules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("retentionPeriod")
    public UpdateDatasetRequestBodyRetentionPeriod retentionPeriod;
    public UpdateDatasetRequestBody withRetentionPeriod(UpdateDatasetRequestBodyRetentionPeriod retentionPeriod) {
        this.retentionPeriod = retentionPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("triggers")
    public openapisdk.models.shared.DatasetTrigger[] triggers;
    public UpdateDatasetRequestBody withTriggers(openapisdk.models.shared.DatasetTrigger[] triggers) {
        this.triggers = triggers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("versioningConfiguration")
    public UpdateDatasetRequestBodyVersioningConfiguration versioningConfiguration;
    public UpdateDatasetRequestBody withVersioningConfiguration(UpdateDatasetRequestBodyVersioningConfiguration versioningConfiguration) {
        this.versioningConfiguration = versioningConfiguration;
        return this;
    }
}