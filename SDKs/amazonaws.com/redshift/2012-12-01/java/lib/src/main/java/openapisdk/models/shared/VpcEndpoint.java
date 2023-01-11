package openapisdk.models.shared;



/**
 * VpcEndpoint
 * The connection endpoint for connecting to an Amazon Redshift cluster through the proxy.
**/
public class VpcEndpoint {
    public NetworkInterfaceList[] networkInterfaces;
    public VpcEndpoint withNetworkInterfaces(NetworkInterfaceList[] networkInterfaces) {
        this.networkInterfaces = networkInterfaces;
        return this;
    }
    public String vpcEndpointId;
    public VpcEndpoint withVpcEndpointId(String vpcEndpointId) {
        this.vpcEndpointId = vpcEndpointId;
        return this;
    }
    public String vpcId;
    public VpcEndpoint withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}