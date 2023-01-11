package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LambdaResource
 * Identifies 
**/
public class LambdaResource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventTriggers")
    public EventTriggerDefinition[] eventTriggers;
    public LambdaResource withEventTriggers(EventTriggerDefinition[] eventTriggers) {
        this.eventTriggers = eventTriggers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LambdaArn")
    public String lambdaArn;
    public LambdaResource withLambdaArn(String lambdaArn) {
        this.lambdaArn = lambdaArn;
        return this;
    }
}