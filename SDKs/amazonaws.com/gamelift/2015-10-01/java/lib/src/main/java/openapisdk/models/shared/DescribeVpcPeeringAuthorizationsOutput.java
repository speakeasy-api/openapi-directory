package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeVpcPeeringAuthorizationsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcPeeringAuthorizations")
    public VpcPeeringAuthorization[] vpcPeeringAuthorizations;
    public DescribeVpcPeeringAuthorizationsOutput withVpcPeeringAuthorizations(VpcPeeringAuthorization[] vpcPeeringAuthorizations) {
        this.vpcPeeringAuthorizations = vpcPeeringAuthorizations;
        return this;
    }
}