package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeProvisioningParametersOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConstraintSummaries")
    public ConstraintSummary[] constraintSummaries;
    public DescribeProvisioningParametersOutput withConstraintSummaries(ConstraintSummary[] constraintSummaries) {
        this.constraintSummaries = constraintSummaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProvisioningArtifactOutputs")
    public ProvisioningArtifactOutput[] provisioningArtifactOutputs;
    public DescribeProvisioningParametersOutput withProvisioningArtifactOutputs(ProvisioningArtifactOutput[] provisioningArtifactOutputs) {
        this.provisioningArtifactOutputs = provisioningArtifactOutputs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProvisioningArtifactParameters")
    public ProvisioningArtifactParameter[] provisioningArtifactParameters;
    public DescribeProvisioningParametersOutput withProvisioningArtifactParameters(ProvisioningArtifactParameter[] provisioningArtifactParameters) {
        this.provisioningArtifactParameters = provisioningArtifactParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProvisioningArtifactPreferences")
    public ProvisioningArtifactPreferences provisioningArtifactPreferences;
    public DescribeProvisioningParametersOutput withProvisioningArtifactPreferences(ProvisioningArtifactPreferences provisioningArtifactPreferences) {
        this.provisioningArtifactPreferences = provisioningArtifactPreferences;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TagOptions")
    public TagOptionSummary[] tagOptions;
    public DescribeProvisioningParametersOutput withTagOptions(TagOptionSummary[] tagOptions) {
        this.tagOptions = tagOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UsageInstructions")
    public UsageInstruction[] usageInstructions;
    public DescribeProvisioningParametersOutput withUsageInstructions(UsageInstruction[] usageInstructions) {
        this.usageInstructions = usageInstructions;
        return this;
    }
}