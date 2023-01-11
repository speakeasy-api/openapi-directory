package openapisdk.models.shared;



/**
 * VpcEndpointsList
 * The connection endpoint for connecting to an Amazon Redshift cluster through the proxy.
**/
public class VpcEndpointsList {
    public NetworkInterfaceList[] networkInterfaces;
    public VpcEndpointsList withNetworkInterfaces(NetworkInterfaceList[] networkInterfaces) {
        this.networkInterfaces = networkInterfaces;
        return this;
    }
    public String vpcEndpointId;
    public VpcEndpointsList withVpcEndpointId(String vpcEndpointId) {
        this.vpcEndpointId = vpcEndpointId;
        return this;
    }
    public String vpcId;
    public VpcEndpointsList withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}