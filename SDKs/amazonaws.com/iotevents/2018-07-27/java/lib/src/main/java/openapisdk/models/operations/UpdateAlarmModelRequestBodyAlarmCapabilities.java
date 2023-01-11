package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateAlarmModelRequestBodyAlarmCapabilities
 * Contains the configuration information of alarm state changes.
**/
public class UpdateAlarmModelRequestBodyAlarmCapabilities {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("acknowledgeFlow")
    public openapisdk.models.shared.AcknowledgeFlow acknowledgeFlow;
    public UpdateAlarmModelRequestBodyAlarmCapabilities withAcknowledgeFlow(openapisdk.models.shared.AcknowledgeFlow acknowledgeFlow) {
        this.acknowledgeFlow = acknowledgeFlow;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("initializationConfiguration")
    public openapisdk.models.shared.InitializationConfiguration initializationConfiguration;
    public UpdateAlarmModelRequestBodyAlarmCapabilities withInitializationConfiguration(openapisdk.models.shared.InitializationConfiguration initializationConfiguration) {
        this.initializationConfiguration = initializationConfiguration;
        return this;
    }
}