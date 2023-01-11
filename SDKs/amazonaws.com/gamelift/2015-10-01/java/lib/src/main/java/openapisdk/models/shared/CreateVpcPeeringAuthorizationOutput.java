package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateVpcPeeringAuthorizationOutput
 * Represents the returned data in response to a request operation.
**/
public class CreateVpcPeeringAuthorizationOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcPeeringAuthorization")
    public VpcPeeringAuthorization vpcPeeringAuthorization;
    public CreateVpcPeeringAuthorizationOutput withVpcPeeringAuthorization(VpcPeeringAuthorization vpcPeeringAuthorization) {
        this.vpcPeeringAuthorization = vpcPeeringAuthorization;
        return this;
    }
}