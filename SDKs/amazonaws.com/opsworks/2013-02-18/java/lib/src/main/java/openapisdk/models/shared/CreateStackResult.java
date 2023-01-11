package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateStackResult
 * Contains the response to a <code>CreateStack</code> request.
**/
public class CreateStackResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StackId")
    public String stackId;
    public CreateStackResult withStackId(String stackId) {
        this.stackId = stackId;
        return this;
    }
}