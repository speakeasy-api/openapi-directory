package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeProductOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Budgets")
    public BudgetDetail[] budgets;
    public DescribeProductOutput withBudgets(BudgetDetail[] budgets) {
        this.budgets = budgets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LaunchPaths")
    public LaunchPath[] launchPaths;
    public DescribeProductOutput withLaunchPaths(LaunchPath[] launchPaths) {
        this.launchPaths = launchPaths;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProductViewSummary")
    public ProductViewSummary productViewSummary;
    public DescribeProductOutput withProductViewSummary(ProductViewSummary productViewSummary) {
        this.productViewSummary = productViewSummary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProvisioningArtifacts")
    public ProvisioningArtifact[] provisioningArtifacts;
    public DescribeProductOutput withProvisioningArtifacts(ProvisioningArtifact[] provisioningArtifacts) {
        this.provisioningArtifacts = provisioningArtifacts;
        return this;
    }
}