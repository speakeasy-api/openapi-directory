package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ModifyHsmResponse
 * Contains the output of the <a>ModifyHsm</a> operation.
**/
public class ModifyHsmResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HsmArn")
    public String hsmArn;
    public ModifyHsmResponse withHsmArn(String hsmArn) {
        this.hsmArn = hsmArn;
        return this;
    }
}