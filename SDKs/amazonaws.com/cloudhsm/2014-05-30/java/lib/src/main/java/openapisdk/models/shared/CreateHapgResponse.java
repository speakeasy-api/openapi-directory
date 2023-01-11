package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateHapgResponse
 * Contains the output of the <a>CreateHAPartitionGroup</a> action.
**/
public class CreateHapgResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HapgArn")
    public String hapgArn;
    public CreateHapgResponse withHapgArn(String hapgArn) {
        this.hapgArn = hapgArn;
        return this;
    }
}