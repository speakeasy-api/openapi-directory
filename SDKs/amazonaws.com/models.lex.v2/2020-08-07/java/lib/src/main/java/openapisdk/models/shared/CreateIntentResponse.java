package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class CreateIntentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("botId")
    public String botId;
    public CreateIntentResponse withBotId(String botId) {
        this.botId = botId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("botVersion")
    public String botVersion;
    public CreateIntentResponse withBotVersion(String botVersion) {
        this.botVersion = botVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("creationDateTime")
    public OffsetDateTime creationDateTime;
    public CreateIntentResponse withCreationDateTime(OffsetDateTime creationDateTime) {
        this.creationDateTime = creationDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateIntentResponse withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dialogCodeHook")
    public DialogCodeHookSettings dialogCodeHook;
    public CreateIntentResponse withDialogCodeHook(DialogCodeHookSettings dialogCodeHook) {
        this.dialogCodeHook = dialogCodeHook;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fulfillmentCodeHook")
    public FulfillmentCodeHookSettings fulfillmentCodeHook;
    public CreateIntentResponse withFulfillmentCodeHook(FulfillmentCodeHookSettings fulfillmentCodeHook) {
        this.fulfillmentCodeHook = fulfillmentCodeHook;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputContexts")
    public InputContext[] inputContexts;
    public CreateIntentResponse withInputContexts(InputContext[] inputContexts) {
        this.inputContexts = inputContexts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("intentClosingSetting")
    public IntentClosingSetting intentClosingSetting;
    public CreateIntentResponse withIntentClosingSetting(IntentClosingSetting intentClosingSetting) {
        this.intentClosingSetting = intentClosingSetting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("intentConfirmationSetting")
    public IntentConfirmationSetting intentConfirmationSetting;
    public CreateIntentResponse withIntentConfirmationSetting(IntentConfirmationSetting intentConfirmationSetting) {
        this.intentConfirmationSetting = intentConfirmationSetting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("intentId")
    public String intentId;
    public CreateIntentResponse withIntentId(String intentId) {
        this.intentId = intentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("intentName")
    public String intentName;
    public CreateIntentResponse withIntentName(String intentName) {
        this.intentName = intentName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kendraConfiguration")
    public KendraConfiguration kendraConfiguration;
    public CreateIntentResponse withKendraConfiguration(KendraConfiguration kendraConfiguration) {
        this.kendraConfiguration = kendraConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localeId")
    public String localeId;
    public CreateIntentResponse withLocaleId(String localeId) {
        this.localeId = localeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputContexts")
    public OutputContext[] outputContexts;
    public CreateIntentResponse withOutputContexts(OutputContext[] outputContexts) {
        this.outputContexts = outputContexts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parentIntentSignature")
    public String parentIntentSignature;
    public CreateIntentResponse withParentIntentSignature(String parentIntentSignature) {
        this.parentIntentSignature = parentIntentSignature;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sampleUtterances")
    public SampleUtterance[] sampleUtterances;
    public CreateIntentResponse withSampleUtterances(SampleUtterance[] sampleUtterances) {
        this.sampleUtterances = sampleUtterances;
        return this;
    }
}