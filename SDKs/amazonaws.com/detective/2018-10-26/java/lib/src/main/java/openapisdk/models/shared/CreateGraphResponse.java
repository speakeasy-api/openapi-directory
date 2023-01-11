package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateGraphResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GraphArn")
    public String graphArn;
    public CreateGraphResponse withGraphArn(String graphArn) {
        this.graphArn = graphArn;
        return this;
    }
}