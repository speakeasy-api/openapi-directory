package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ShareRule
 * Specifies a rule for sharing snapshots across Amazon Web Services accounts.
**/
public class ShareRule {
    @JsonProperty("TargetAccounts")
    public String[] targetAccounts;
    public ShareRule withTargetAccounts(String[] targetAccounts) {
        this.targetAccounts = targetAccounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UnshareInterval")
    public Long unshareInterval;
    public ShareRule withUnshareInterval(Long unshareInterval) {
        this.unshareInterval = unshareInterval;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UnshareIntervalUnit")
    public RetentionIntervalUnitValuesEnum unshareIntervalUnit;
    public ShareRule withUnshareIntervalUnit(RetentionIntervalUnitValuesEnum unshareIntervalUnit) {
        this.unshareIntervalUnit = unshareIntervalUnit;
        return this;
    }
}