package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteHapgResponse
 * Contains the output of the <a>DeleteHapg</a> action.
**/
public class DeleteHapgResponse {
    @JsonProperty("Status")
    public String status;
    public DeleteHapgResponse withStatus(String status) {
        this.status = status;
        return this;
    }
}