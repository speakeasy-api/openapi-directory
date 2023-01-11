package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateContractResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("info")
    public BeezUpCommonInfoSummaries info;
    public CreateContractResponse withInfo(BeezUpCommonInfoSummaries info) {
        this.info = info;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public CreateContractResponseLinks links;
    public CreateContractResponse withLinks(CreateContractResponseLinks links) {
        this.links = links;
        return this;
    }
}