package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetOnPremisesInstanceOutput
 *  Represents the output of a <code>GetOnPremisesInstance</code> operation. 
**/
public class GetOnPremisesInstanceOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceInfo")
    public InstanceInfo instanceInfo;
    public GetOnPremisesInstanceOutput withInstanceInfo(InstanceInfo instanceInfo) {
        this.instanceInfo = instanceInfo;
        return this;
    }
}