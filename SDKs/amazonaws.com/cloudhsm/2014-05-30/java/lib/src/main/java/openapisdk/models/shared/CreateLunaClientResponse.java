package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateLunaClientResponse
 * Contains the output of the <a>CreateLunaClient</a> action.
**/
public class CreateLunaClientResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientArn")
    public String clientArn;
    public CreateLunaClientResponse withClientArn(String clientArn) {
        this.clientArn = clientArn;
        return this;
    }
}