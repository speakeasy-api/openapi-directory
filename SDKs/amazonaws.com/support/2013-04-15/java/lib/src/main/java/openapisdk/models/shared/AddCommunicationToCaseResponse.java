package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddCommunicationToCaseResponse
 * The result of the <a>AddCommunicationToCase</a> operation.
**/
public class AddCommunicationToCaseResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result")
    public Boolean result;
    public AddCommunicationToCaseResponse withResult(Boolean result) {
        this.result = result;
        return this;
    }
}