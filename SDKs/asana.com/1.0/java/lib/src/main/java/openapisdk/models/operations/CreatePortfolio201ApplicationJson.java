package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreatePortfolio201ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.PortfolioResponse data;
    public CreatePortfolio201ApplicationJson withData(openapisdk.models.shared.PortfolioResponse data) {
        this.data = data;
        return this;
    }
}