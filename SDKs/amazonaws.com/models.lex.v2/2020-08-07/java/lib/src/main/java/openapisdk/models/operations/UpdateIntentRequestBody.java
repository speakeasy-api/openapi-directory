package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateIntentRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public UpdateIntentRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dialogCodeHook")
    public UpdateIntentRequestBodyDialogCodeHook dialogCodeHook;
    public UpdateIntentRequestBody withDialogCodeHook(UpdateIntentRequestBodyDialogCodeHook dialogCodeHook) {
        this.dialogCodeHook = dialogCodeHook;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fulfillmentCodeHook")
    public UpdateIntentRequestBodyFulfillmentCodeHook fulfillmentCodeHook;
    public UpdateIntentRequestBody withFulfillmentCodeHook(UpdateIntentRequestBodyFulfillmentCodeHook fulfillmentCodeHook) {
        this.fulfillmentCodeHook = fulfillmentCodeHook;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputContexts")
    public openapisdk.models.shared.InputContext[] inputContexts;
    public UpdateIntentRequestBody withInputContexts(openapisdk.models.shared.InputContext[] inputContexts) {
        this.inputContexts = inputContexts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("intentClosingSetting")
    public UpdateIntentRequestBodyIntentClosingSetting intentClosingSetting;
    public UpdateIntentRequestBody withIntentClosingSetting(UpdateIntentRequestBodyIntentClosingSetting intentClosingSetting) {
        this.intentClosingSetting = intentClosingSetting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("intentConfirmationSetting")
    public UpdateIntentRequestBodyIntentConfirmationSetting intentConfirmationSetting;
    public UpdateIntentRequestBody withIntentConfirmationSetting(UpdateIntentRequestBodyIntentConfirmationSetting intentConfirmationSetting) {
        this.intentConfirmationSetting = intentConfirmationSetting;
        return this;
    }
    @JsonProperty("intentName")
    public String intentName;
    public UpdateIntentRequestBody withIntentName(String intentName) {
        this.intentName = intentName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kendraConfiguration")
    public UpdateIntentRequestBodyKendraConfiguration kendraConfiguration;
    public UpdateIntentRequestBody withKendraConfiguration(UpdateIntentRequestBodyKendraConfiguration kendraConfiguration) {
        this.kendraConfiguration = kendraConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputContexts")
    public openapisdk.models.shared.OutputContext[] outputContexts;
    public UpdateIntentRequestBody withOutputContexts(openapisdk.models.shared.OutputContext[] outputContexts) {
        this.outputContexts = outputContexts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parentIntentSignature")
    public String parentIntentSignature;
    public UpdateIntentRequestBody withParentIntentSignature(String parentIntentSignature) {
        this.parentIntentSignature = parentIntentSignature;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sampleUtterances")
    public openapisdk.models.shared.SampleUtterance[] sampleUtterances;
    public UpdateIntentRequestBody withSampleUtterances(openapisdk.models.shared.SampleUtterance[] sampleUtterances) {
        this.sampleUtterances = sampleUtterances;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("slotPriorities")
    public openapisdk.models.shared.SlotPriority[] slotPriorities;
    public UpdateIntentRequestBody withSlotPriorities(openapisdk.models.shared.SlotPriority[] slotPriorities) {
        this.slotPriorities = slotPriorities;
        return this;
    }
}