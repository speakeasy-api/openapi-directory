package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateHsmResponse
 * Contains the output of the <code>CreateHsm</code> operation.
**/
public class CreateHsmResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HsmArn")
    public String hsmArn;
    public CreateHsmResponse withHsmArn(String hsmArn) {
        this.hsmArn = hsmArn;
        return this;
    }
}