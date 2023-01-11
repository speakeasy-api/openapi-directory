package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteHsmRequest
 * Contains the inputs for the <a>DeleteHsm</a> operation.
**/
public class DeleteHsmRequest {
    @JsonProperty("HsmArn")
    public String hsmArn;
    public DeleteHsmRequest withHsmArn(String hsmArn) {
        this.hsmArn = hsmArn;
        return this;
    }
}