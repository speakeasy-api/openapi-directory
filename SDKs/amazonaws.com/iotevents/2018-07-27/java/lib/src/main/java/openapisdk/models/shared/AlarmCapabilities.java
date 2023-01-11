package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AlarmCapabilities
 * Contains the configuration information of alarm state changes.
**/
public class AlarmCapabilities {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("acknowledgeFlow")
    public AcknowledgeFlow acknowledgeFlow;
    public AlarmCapabilities withAcknowledgeFlow(AcknowledgeFlow acknowledgeFlow) {
        this.acknowledgeFlow = acknowledgeFlow;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("initializationConfiguration")
    public InitializationConfiguration initializationConfiguration;
    public AlarmCapabilities withInitializationConfiguration(InitializationConfiguration initializationConfiguration) {
        this.initializationConfiguration = initializationConfiguration;
        return this;
    }
}