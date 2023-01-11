package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdatePortfolioOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PortfolioDetail")
    public PortfolioDetail portfolioDetail;
    public UpdatePortfolioOutput withPortfolioDetail(PortfolioDetail portfolioDetail) {
        this.portfolioDetail = portfolioDetail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public UpdatePortfolioOutput withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}