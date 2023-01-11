package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribePortfolioOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Budgets")
    public BudgetDetail[] budgets;
    public DescribePortfolioOutput withBudgets(BudgetDetail[] budgets) {
        this.budgets = budgets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PortfolioDetail")
    public PortfolioDetail portfolioDetail;
    public DescribePortfolioOutput withPortfolioDetail(PortfolioDetail portfolioDetail) {
        this.portfolioDetail = portfolioDetail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TagOptions")
    public TagOptionDetail[] tagOptions;
    public DescribePortfolioOutput withTagOptions(TagOptionDetail[] tagOptions) {
        this.tagOptions = tagOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public DescribePortfolioOutput withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}