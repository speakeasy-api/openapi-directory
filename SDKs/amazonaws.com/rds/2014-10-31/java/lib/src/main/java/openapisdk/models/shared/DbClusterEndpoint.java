package openapisdk.models.shared;



/**
 * DbClusterEndpoint
 * <p>This data type represents the information you need to connect to an Amazon Aurora DB cluster. This data type is used as a response element in the following actions:</p> <ul> <li> <p> <code>CreateDBClusterEndpoint</code> </p> </li> <li> <p> <code>DescribeDBClusterEndpoints</code> </p> </li> <li> <p> <code>ModifyDBClusterEndpoint</code> </p> </li> <li> <p> <code>DeleteDBClusterEndpoint</code> </p> </li> </ul> <p>For the data structure that represents Amazon RDS DB instance endpoints, see <code>Endpoint</code>.</p>
**/
public class DbClusterEndpoint {
    public String customEndpointType;
    public DbClusterEndpoint withCustomEndpointType(String customEndpointType) {
        this.customEndpointType = customEndpointType;
        return this;
    }
    public String dbClusterEndpointArn;
    public DbClusterEndpoint withDbClusterEndpointArn(String dbClusterEndpointArn) {
        this.dbClusterEndpointArn = dbClusterEndpointArn;
        return this;
    }
    public String dbClusterEndpointIdentifier;
    public DbClusterEndpoint withDbClusterEndpointIdentifier(String dbClusterEndpointIdentifier) {
        this.dbClusterEndpointIdentifier = dbClusterEndpointIdentifier;
        return this;
    }
    public String dbClusterEndpointResourceIdentifier;
    public DbClusterEndpoint withDbClusterEndpointResourceIdentifier(String dbClusterEndpointResourceIdentifier) {
        this.dbClusterEndpointResourceIdentifier = dbClusterEndpointResourceIdentifier;
        return this;
    }
    public String dbClusterIdentifier;
    public DbClusterEndpoint withDbClusterIdentifier(String dbClusterIdentifier) {
        this.dbClusterIdentifier = dbClusterIdentifier;
        return this;
    }
    public String endpoint;
    public DbClusterEndpoint withEndpoint(String endpoint) {
        this.endpoint = endpoint;
        return this;
    }
    public String endpointType;
    public DbClusterEndpoint withEndpointType(String endpointType) {
        this.endpointType = endpointType;
        return this;
    }
    public String[] excludedMembers;
    public DbClusterEndpoint withExcludedMembers(String[] excludedMembers) {
        this.excludedMembers = excludedMembers;
        return this;
    }
    public String[] staticMembers;
    public DbClusterEndpoint withStaticMembers(String[] staticMembers) {
        this.staticMembers = staticMembers;
        return this;
    }
    public String status;
    public DbClusterEndpoint withStatus(String status) {
        this.status = status;
        return this;
    }
}