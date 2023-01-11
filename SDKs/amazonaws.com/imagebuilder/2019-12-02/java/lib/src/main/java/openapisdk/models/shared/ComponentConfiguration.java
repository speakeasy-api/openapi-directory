package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ComponentConfiguration
 *  Configuration details of the component.
**/
public class ComponentConfiguration {
    @JsonProperty("componentArn")
    public String componentArn;
    public ComponentConfiguration withComponentArn(String componentArn) {
        this.componentArn = componentArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameters")
    public ComponentParameter[] parameters;
    public ComponentConfiguration withParameters(ComponentParameter[] parameters) {
        this.parameters = parameters;
        return this;
    }
}