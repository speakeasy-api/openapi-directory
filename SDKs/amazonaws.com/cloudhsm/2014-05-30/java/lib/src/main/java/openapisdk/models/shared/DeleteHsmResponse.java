package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteHsmResponse
 * Contains the output of the <a>DeleteHsm</a> operation.
**/
public class DeleteHsmResponse {
    @JsonProperty("Status")
    public String status;
    public DeleteHsmResponse withStatus(String status) {
        this.status = status;
        return this;
    }
}