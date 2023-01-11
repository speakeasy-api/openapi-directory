package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteHapgRequest
 * Contains the inputs for the <a>DeleteHapg</a> action.
**/
public class DeleteHapgRequest {
    @JsonProperty("HapgArn")
    public String hapgArn;
    public DeleteHapgRequest withHapgArn(String hapgArn) {
        this.hapgArn = hapgArn;
        return this;
    }
}