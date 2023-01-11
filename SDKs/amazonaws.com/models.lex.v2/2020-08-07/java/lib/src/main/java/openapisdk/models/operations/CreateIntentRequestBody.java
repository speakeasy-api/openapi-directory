package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateIntentRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateIntentRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dialogCodeHook")
    public CreateIntentRequestBodyDialogCodeHook dialogCodeHook;
    public CreateIntentRequestBody withDialogCodeHook(CreateIntentRequestBodyDialogCodeHook dialogCodeHook) {
        this.dialogCodeHook = dialogCodeHook;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fulfillmentCodeHook")
    public CreateIntentRequestBodyFulfillmentCodeHook fulfillmentCodeHook;
    public CreateIntentRequestBody withFulfillmentCodeHook(CreateIntentRequestBodyFulfillmentCodeHook fulfillmentCodeHook) {
        this.fulfillmentCodeHook = fulfillmentCodeHook;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputContexts")
    public openapisdk.models.shared.InputContext[] inputContexts;
    public CreateIntentRequestBody withInputContexts(openapisdk.models.shared.InputContext[] inputContexts) {
        this.inputContexts = inputContexts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("intentClosingSetting")
    public CreateIntentRequestBodyIntentClosingSetting intentClosingSetting;
    public CreateIntentRequestBody withIntentClosingSetting(CreateIntentRequestBodyIntentClosingSetting intentClosingSetting) {
        this.intentClosingSetting = intentClosingSetting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("intentConfirmationSetting")
    public CreateIntentRequestBodyIntentConfirmationSetting intentConfirmationSetting;
    public CreateIntentRequestBody withIntentConfirmationSetting(CreateIntentRequestBodyIntentConfirmationSetting intentConfirmationSetting) {
        this.intentConfirmationSetting = intentConfirmationSetting;
        return this;
    }
    @JsonProperty("intentName")
    public String intentName;
    public CreateIntentRequestBody withIntentName(String intentName) {
        this.intentName = intentName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kendraConfiguration")
    public CreateIntentRequestBodyKendraConfiguration kendraConfiguration;
    public CreateIntentRequestBody withKendraConfiguration(CreateIntentRequestBodyKendraConfiguration kendraConfiguration) {
        this.kendraConfiguration = kendraConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputContexts")
    public openapisdk.models.shared.OutputContext[] outputContexts;
    public CreateIntentRequestBody withOutputContexts(openapisdk.models.shared.OutputContext[] outputContexts) {
        this.outputContexts = outputContexts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parentIntentSignature")
    public String parentIntentSignature;
    public CreateIntentRequestBody withParentIntentSignature(String parentIntentSignature) {
        this.parentIntentSignature = parentIntentSignature;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sampleUtterances")
    public openapisdk.models.shared.SampleUtterance[] sampleUtterances;
    public CreateIntentRequestBody withSampleUtterances(openapisdk.models.shared.SampleUtterance[] sampleUtterances) {
        this.sampleUtterances = sampleUtterances;
        return this;
    }
}