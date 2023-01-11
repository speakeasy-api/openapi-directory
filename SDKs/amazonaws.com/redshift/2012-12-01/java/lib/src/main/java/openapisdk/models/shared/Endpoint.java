package openapisdk.models.shared;



/**
 * Endpoint
 * Describes a connection endpoint.
**/
public class Endpoint {
    public String address;
    public Endpoint withAddress(String address) {
        this.address = address;
        return this;
    }
    public Long port;
    public Endpoint withPort(Long port) {
        this.port = port;
        return this;
    }
    public VpcEndpointsList[] vpcEndpoints;
    public Endpoint withVpcEndpoints(VpcEndpointsList[] vpcEndpoints) {
        this.vpcEndpoints = vpcEndpoints;
        return this;
    }
}