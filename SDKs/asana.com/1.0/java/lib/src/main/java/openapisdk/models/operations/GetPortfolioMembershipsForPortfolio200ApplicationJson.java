package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetPortfolioMembershipsForPortfolio200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.PortfolioMembershipCompact[] data;
    public GetPortfolioMembershipsForPortfolio200ApplicationJson withData(openapisdk.models.shared.PortfolioMembershipCompact[] data) {
        this.data = data;
        return this;
    }
}