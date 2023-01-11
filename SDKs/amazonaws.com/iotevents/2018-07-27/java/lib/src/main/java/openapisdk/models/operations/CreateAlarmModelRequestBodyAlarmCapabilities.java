package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateAlarmModelRequestBodyAlarmCapabilities
 * Contains the configuration information of alarm state changes.
**/
public class CreateAlarmModelRequestBodyAlarmCapabilities {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("acknowledgeFlow")
    public openapisdk.models.shared.AcknowledgeFlow acknowledgeFlow;
    public CreateAlarmModelRequestBodyAlarmCapabilities withAcknowledgeFlow(openapisdk.models.shared.AcknowledgeFlow acknowledgeFlow) {
        this.acknowledgeFlow = acknowledgeFlow;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("initializationConfiguration")
    public openapisdk.models.shared.InitializationConfiguration initializationConfiguration;
    public CreateAlarmModelRequestBodyAlarmCapabilities withInitializationConfiguration(openapisdk.models.shared.InitializationConfiguration initializationConfiguration) {
        this.initializationConfiguration = initializationConfiguration;
        return this;
    }
}