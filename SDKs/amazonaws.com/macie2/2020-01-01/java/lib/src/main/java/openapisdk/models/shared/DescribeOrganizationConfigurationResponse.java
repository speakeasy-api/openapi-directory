package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeOrganizationConfigurationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoEnable")
    public Boolean autoEnable;
    public DescribeOrganizationConfigurationResponse withAutoEnable(Boolean autoEnable) {
        this.autoEnable = autoEnable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxAccountLimitReached")
    public Boolean maxAccountLimitReached;
    public DescribeOrganizationConfigurationResponse withMaxAccountLimitReached(Boolean maxAccountLimitReached) {
        this.maxAccountLimitReached = maxAccountLimitReached;
        return this;
    }
}