package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetPortfolioMembership200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.PortfolioMembershipResponse data;
    public GetPortfolioMembership200ApplicationJson withData(openapisdk.models.shared.PortfolioMembershipResponse data) {
        this.data = data;
        return this;
    }
}