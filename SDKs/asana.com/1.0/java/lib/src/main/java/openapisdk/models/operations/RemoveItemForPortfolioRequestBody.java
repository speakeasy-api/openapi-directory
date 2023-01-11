package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RemoveItemForPortfolioRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.PortfolioRemoveItemRequest data;
    public RemoveItemForPortfolioRequestBody withData(openapisdk.models.shared.PortfolioRemoveItemRequest data) {
        this.data = data;
        return this;
    }
}