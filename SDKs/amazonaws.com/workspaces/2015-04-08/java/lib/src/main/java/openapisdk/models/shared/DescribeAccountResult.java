package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeAccountResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DedicatedTenancyManagementCidrRange")
    public String dedicatedTenancyManagementCidrRange;
    public DescribeAccountResult withDedicatedTenancyManagementCidrRange(String dedicatedTenancyManagementCidrRange) {
        this.dedicatedTenancyManagementCidrRange = dedicatedTenancyManagementCidrRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DedicatedTenancySupport")
    public DedicatedTenancySupportResultEnumEnum dedicatedTenancySupport;
    public DescribeAccountResult withDedicatedTenancySupport(DedicatedTenancySupportResultEnumEnum dedicatedTenancySupport) {
        this.dedicatedTenancySupport = dedicatedTenancySupport;
        return this;
    }
}