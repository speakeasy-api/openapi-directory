package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddMembersForPortfolioRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.AddMembersRequest data;
    public AddMembersForPortfolioRequestBody withData(openapisdk.models.shared.AddMembersRequest data) {
        this.data = data;
        return this;
    }
}