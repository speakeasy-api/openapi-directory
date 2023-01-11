package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddItemForPortfolioRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.PortfolioAddItemRequest data;
    public AddItemForPortfolioRequestBody withData(openapisdk.models.shared.PortfolioAddItemRequest data) {
        this.data = data;
        return this;
    }
}