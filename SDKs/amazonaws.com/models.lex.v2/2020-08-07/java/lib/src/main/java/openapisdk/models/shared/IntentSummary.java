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
 * IntentSummary
 * Summary information about an intent returned by the <code>ListIntents</code> operation.
**/
public class IntentSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public IntentSummary withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputContexts")
    public InputContext[] inputContexts;
    public IntentSummary withInputContexts(InputContext[] inputContexts) {
        this.inputContexts = inputContexts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("intentId")
    public String intentId;
    public IntentSummary withIntentId(String intentId) {
        this.intentId = intentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("intentName")
    public String intentName;
    public IntentSummary withIntentName(String intentName) {
        this.intentName = intentName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastUpdatedDateTime")
    public OffsetDateTime lastUpdatedDateTime;
    public IntentSummary withLastUpdatedDateTime(OffsetDateTime lastUpdatedDateTime) {
        this.lastUpdatedDateTime = lastUpdatedDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputContexts")
    public OutputContext[] outputContexts;
    public IntentSummary withOutputContexts(OutputContext[] outputContexts) {
        this.outputContexts = outputContexts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parentIntentSignature")
    public String parentIntentSignature;
    public IntentSummary withParentIntentSignature(String parentIntentSignature) {
        this.parentIntentSignature = parentIntentSignature;
        return this;
    }
}