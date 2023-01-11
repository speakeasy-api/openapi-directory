package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RiskExceptionConfigurationType
 * The type of the configuration to override the risk decision.
**/
public class RiskExceptionConfigurationType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BlockedIPRangeList")
    public String[] blockedIPRangeList;
    public RiskExceptionConfigurationType withBlockedIpRangeList(String[] blockedIPRangeList) {
        this.blockedIPRangeList = blockedIPRangeList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SkippedIPRangeList")
    public String[] skippedIPRangeList;
    public RiskExceptionConfigurationType withSkippedIpRangeList(String[] skippedIPRangeList) {
        this.skippedIPRangeList = skippedIPRangeList;
        return this;
    }
}