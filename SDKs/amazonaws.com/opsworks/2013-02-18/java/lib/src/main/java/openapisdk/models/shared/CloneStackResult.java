package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CloneStackResult
 * Contains the response to a <code>CloneStack</code> request.
**/
public class CloneStackResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StackId")
    public String stackId;
    public CloneStackResult withStackId(String stackId) {
        this.stackId = stackId;
        return this;
    }
}