package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeOrganizationConfigurationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutoEnable")
    public Boolean autoEnable;
    public DescribeOrganizationConfigurationResponse withAutoEnable(Boolean autoEnable) {
        this.autoEnable = autoEnable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MemberAccountLimitReached")
    public Boolean memberAccountLimitReached;
    public DescribeOrganizationConfigurationResponse withMemberAccountLimitReached(Boolean memberAccountLimitReached) {
        this.memberAccountLimitReached = memberAccountLimitReached;
        return this;
    }
}