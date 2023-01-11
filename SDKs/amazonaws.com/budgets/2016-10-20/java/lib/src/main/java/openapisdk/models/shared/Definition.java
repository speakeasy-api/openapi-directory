package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Definition
 *  Specifies all of the type-specific parameters. 
**/
public class Definition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IamActionDefinition")
    public IamActionDefinition iamActionDefinition;
    public Definition withIamActionDefinition(IamActionDefinition iamActionDefinition) {
        this.iamActionDefinition = iamActionDefinition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ScpActionDefinition")
    public ScpActionDefinition scpActionDefinition;
    public Definition withScpActionDefinition(ScpActionDefinition scpActionDefinition) {
        this.scpActionDefinition = scpActionDefinition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SsmActionDefinition")
    public SsmActionDefinition ssmActionDefinition;
    public Definition withSsmActionDefinition(SsmActionDefinition ssmActionDefinition) {
        this.ssmActionDefinition = ssmActionDefinition;
        return this;
    }
}