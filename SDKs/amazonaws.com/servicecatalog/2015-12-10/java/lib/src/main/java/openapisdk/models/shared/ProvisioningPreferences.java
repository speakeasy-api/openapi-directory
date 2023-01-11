package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProvisioningPreferences
 * <p>The user-defined preferences that will be applied when updating a provisioned product. Not all preferences are applicable to all provisioned product type</p> <p>One or more AWS accounts that will have access to the provisioned product.</p> <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p> <p>The AWS accounts specified should be within the list of accounts in the <code>STACKSET</code> constraint. To get the list of accounts in the <code>STACKSET</code> constraint, use the <code>DescribeProvisioningParameters</code> operation.</p> <p>If no values are specified, the default value is all accounts from the <code>STACKSET</code> constraint.</p>
**/
public class ProvisioningPreferences {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StackSetAccounts")
    public String[] stackSetAccounts;
    public ProvisioningPreferences withStackSetAccounts(String[] stackSetAccounts) {
        this.stackSetAccounts = stackSetAccounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StackSetFailureToleranceCount")
    public Long stackSetFailureToleranceCount;
    public ProvisioningPreferences withStackSetFailureToleranceCount(Long stackSetFailureToleranceCount) {
        this.stackSetFailureToleranceCount = stackSetFailureToleranceCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StackSetFailureTolerancePercentage")
    public Long stackSetFailureTolerancePercentage;
    public ProvisioningPreferences withStackSetFailureTolerancePercentage(Long stackSetFailureTolerancePercentage) {
        this.stackSetFailureTolerancePercentage = stackSetFailureTolerancePercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StackSetMaxConcurrencyCount")
    public Long stackSetMaxConcurrencyCount;
    public ProvisioningPreferences withStackSetMaxConcurrencyCount(Long stackSetMaxConcurrencyCount) {
        this.stackSetMaxConcurrencyCount = stackSetMaxConcurrencyCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StackSetMaxConcurrencyPercentage")
    public Long stackSetMaxConcurrencyPercentage;
    public ProvisioningPreferences withStackSetMaxConcurrencyPercentage(Long stackSetMaxConcurrencyPercentage) {
        this.stackSetMaxConcurrencyPercentage = stackSetMaxConcurrencyPercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StackSetRegions")
    public String[] stackSetRegions;
    public ProvisioningPreferences withStackSetRegions(String[] stackSetRegions) {
        this.stackSetRegions = stackSetRegions;
        return this;
    }
}