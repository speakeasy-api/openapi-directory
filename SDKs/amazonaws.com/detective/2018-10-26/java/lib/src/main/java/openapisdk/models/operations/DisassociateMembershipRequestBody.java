package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DisassociateMembershipRequestBody {
    @JsonProperty("GraphArn")
    public String graphArn;
    public DisassociateMembershipRequestBody withGraphArn(String graphArn) {
        this.graphArn = graphArn;
        return this;
    }
}