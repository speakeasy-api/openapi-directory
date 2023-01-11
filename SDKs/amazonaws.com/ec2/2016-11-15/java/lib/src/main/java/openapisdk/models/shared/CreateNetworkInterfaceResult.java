package openapisdk.models.shared;



/**
 * CreateNetworkInterfaceResult
 * Contains the output of CreateNetworkInterface.
**/
public class CreateNetworkInterfaceResult {
    public java.util.Map<String, Object> clientToken;
    public CreateNetworkInterfaceResult withClientToken(java.util.Map<String, Object> clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    public CreateNetworkInterfaceResultNetworkInterface networkInterface;
    public CreateNetworkInterfaceResult withNetworkInterface(CreateNetworkInterfaceResultNetworkInterface networkInterface) {
        this.networkInterface = networkInterface;
        return this;
    }
}