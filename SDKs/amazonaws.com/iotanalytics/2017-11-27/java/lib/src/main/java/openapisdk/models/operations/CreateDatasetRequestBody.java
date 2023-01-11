package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateDatasetRequestBody {
    @JsonProperty("actions")
    public openapisdk.models.shared.DatasetAction[] actions;
    public CreateDatasetRequestBody withActions(openapisdk.models.shared.DatasetAction[] actions) {
        this.actions = actions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentDeliveryRules")
    public openapisdk.models.shared.DatasetContentDeliveryRule[] contentDeliveryRules;
    public CreateDatasetRequestBody withContentDeliveryRules(openapisdk.models.shared.DatasetContentDeliveryRule[] contentDeliveryRules) {
        this.contentDeliveryRules = contentDeliveryRules;
        return this;
    }
    @JsonProperty("datasetName")
    public String datasetName;
    public CreateDatasetRequestBody withDatasetName(String datasetName) {
        this.datasetName = datasetName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lateDataRules")
    public openapisdk.models.shared.LateDataRule[] lateDataRules;
    public CreateDatasetRequestBody withLateDataRules(openapisdk.models.shared.LateDataRule[] lateDataRules) {
        this.lateDataRules = lateDataRules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("retentionPeriod")
    public CreateDatasetRequestBodyRetentionPeriod retentionPeriod;
    public CreateDatasetRequestBody withRetentionPeriod(CreateDatasetRequestBodyRetentionPeriod retentionPeriod) {
        this.retentionPeriod = retentionPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public openapisdk.models.shared.Tag[] tags;
    public CreateDatasetRequestBody withTags(openapisdk.models.shared.Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("triggers")
    public openapisdk.models.shared.DatasetTrigger[] triggers;
    public CreateDatasetRequestBody withTriggers(openapisdk.models.shared.DatasetTrigger[] triggers) {
        this.triggers = triggers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("versioningConfiguration")
    public CreateDatasetRequestBodyVersioningConfiguration versioningConfiguration;
    public CreateDatasetRequestBody withVersioningConfiguration(CreateDatasetRequestBodyVersioningConfiguration versioningConfiguration) {
        this.versioningConfiguration = versioningConfiguration;
        return this;
    }
}