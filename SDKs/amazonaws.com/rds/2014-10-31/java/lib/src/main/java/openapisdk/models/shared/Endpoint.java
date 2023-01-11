package openapisdk.models.shared;



/**
 * Endpoint
 * <p>This data type represents the information you need to connect to an Amazon RDS DB instance. This data type is used as a response element in the following actions:</p> <ul> <li> <p> <code>CreateDBInstance</code> </p> </li> <li> <p> <code>DescribeDBInstances</code> </p> </li> <li> <p> <code>DeleteDBInstance</code> </p> </li> </ul> <p>For the data structure that represents Amazon Aurora DB cluster endpoints, see <code>DBClusterEndpoint</code>.</p>
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