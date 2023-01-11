package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DescribeIntentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("botId")
    public String botId;
    public DescribeIntentResponse withBotId(String botId) {
        this.botId = botId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("botVersion")
    public String botVersion;
    public DescribeIntentResponse withBotVersion(String botVersion) {
        this.botVersion = botVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("creationDateTime")
    public OffsetDateTime creationDateTime;
    public DescribeIntentResponse withCreationDateTime(OffsetDateTime creationDateTime) {
        this.creationDateTime = creationDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public DescribeIntentResponse withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dialogCodeHook")
    public DialogCodeHookSettings dialogCodeHook;
    public DescribeIntentResponse withDialogCodeHook(DialogCodeHookSettings dialogCodeHook) {
        this.dialogCodeHook = dialogCodeHook;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fulfillmentCodeHook")
    public FulfillmentCodeHookSettings fulfillmentCodeHook;
    public DescribeIntentResponse withFulfillmentCodeHook(FulfillmentCodeHookSettings fulfillmentCodeHook) {
        this.fulfillmentCodeHook = fulfillmentCodeHook;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputContexts")
    public InputContext[] inputContexts;
    public DescribeIntentResponse withInputContexts(InputContext[] inputContexts) {
        this.inputContexts = inputContexts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("intentClosingSetting")
    public IntentClosingSetting intentClosingSetting;
    public DescribeIntentResponse withIntentClosingSetting(IntentClosingSetting intentClosingSetting) {
        this.intentClosingSetting = intentClosingSetting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("intentConfirmationSetting")
    public IntentConfirmationSetting intentConfirmationSetting;
    public DescribeIntentResponse withIntentConfirmationSetting(IntentConfirmationSetting intentConfirmationSetting) {
        this.intentConfirmationSetting = intentConfirmationSetting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("intentId")
    public String intentId;
    public DescribeIntentResponse withIntentId(String intentId) {
        this.intentId = intentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("intentName")
    public String intentName;
    public DescribeIntentResponse withIntentName(String intentName) {
        this.intentName = intentName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kendraConfiguration")
    public KendraConfiguration kendraConfiguration;
    public DescribeIntentResponse withKendraConfiguration(KendraConfiguration kendraConfiguration) {
        this.kendraConfiguration = kendraConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastUpdatedDateTime")
    public OffsetDateTime lastUpdatedDateTime;
    public DescribeIntentResponse withLastUpdatedDateTime(OffsetDateTime lastUpdatedDateTime) {
        this.lastUpdatedDateTime = lastUpdatedDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localeId")
    public String localeId;
    public DescribeIntentResponse withLocaleId(String localeId) {
        this.localeId = localeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputContexts")
    public OutputContext[] outputContexts;
    public DescribeIntentResponse withOutputContexts(OutputContext[] outputContexts) {
        this.outputContexts = outputContexts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parentIntentSignature")
    public String parentIntentSignature;
    public DescribeIntentResponse withParentIntentSignature(String parentIntentSignature) {
        this.parentIntentSignature = parentIntentSignature;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sampleUtterances")
    public SampleUtterance[] sampleUtterances;
    public DescribeIntentResponse withSampleUtterances(SampleUtterance[] sampleUtterances) {
        this.sampleUtterances = sampleUtterances;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("slotPriorities")
    public SlotPriority[] slotPriorities;
    public DescribeIntentResponse withSlotPriorities(SlotPriority[] slotPriorities) {
        this.slotPriorities = slotPriorities;
        return this;
    }
}