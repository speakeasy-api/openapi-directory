package openapisdk.models.shared;



/**
 * Endpoint
 * <p>Specifies a connection endpoint.</p> <p>For the data structure that represents Amazon Neptune DB cluster endpoints, see <code>DBClusterEndpoint</code>.</p>
**/
public class Endpoint {
    public String address;
    public Endpoint withAddress(String address) {
        this.address = address;
        return this;
    }
    public String hostedZoneId;
    public Endpoint withHostedZoneId(String hostedZoneId) {
        this.hostedZoneId = hostedZoneId;
        return this;
    }
    public Long port;
    public Endpoint withPort(Long port) {
        this.port = port;
        return this;
    }
}