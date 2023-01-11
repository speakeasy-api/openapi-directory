package openapisdk.models.shared;



/**
 * DbClusterEndpointList
 * <p>This data type represents the information you need to connect to an Amazon Aurora DB cluster. This data type is used as a response element in the following actions:</p> <ul> <li> <p> <code>CreateDBClusterEndpoint</code> </p> </li> <li> <p> <code>DescribeDBClusterEndpoints</code> </p> </li> <li> <p> <code>ModifyDBClusterEndpoint</code> </p> </li> <li> <p> <code>DeleteDBClusterEndpoint</code> </p> </li> </ul> <p>For the data structure that represents Amazon RDS DB instance endpoints, see <code>Endpoint</code>.</p>
**/
public class DbClusterEndpointList {
    public String customEndpointType;
    public DbClusterEndpointList withCustomEndpointType(String customEndpointType) {
        this.customEndpointType = customEndpointType;
        return this;
    }
    public String dbClusterEndpointArn;
    public DbClusterEndpointList withDbClusterEndpointArn(String dbClusterEndpointArn) {
        this.dbClusterEndpointArn = dbClusterEndpointArn;
        return this;
    }
    public String dbClusterEndpointIdentifier;
    public DbClusterEndpointList withDbClusterEndpointIdentifier(String dbClusterEndpointIdentifier) {
        this.dbClusterEndpointIdentifier = dbClusterEndpointIdentifier;
        return this;
    }
    public String dbClusterEndpointResourceIdentifier;
    public DbClusterEndpointList withDbClusterEndpointResourceIdentifier(String dbClusterEndpointResourceIdentifier) {
        this.dbClusterEndpointResourceIdentifier = dbClusterEndpointResourceIdentifier;
        return this;
    }
    public String dbClusterIdentifier;
    public DbClusterEndpointList withDbClusterIdentifier(String dbClusterIdentifier) {
        this.dbClusterIdentifier = dbClusterIdentifier;
        return this;
    }
    public String endpoint;
    public DbClusterEndpointList withEndpoint(String endpoint) {
        this.endpoint = endpoint;
        return this;
    }
    public String endpointType;
    public DbClusterEndpointList withEndpointType(String endpointType) {
        this.endpointType = endpointType;
        return this;
    }
    public String[] excludedMembers;
    public DbClusterEndpointList withExcludedMembers(String[] excludedMembers) {
        this.excludedMembers = excludedMembers;
        return this;
    }
    public String[] staticMembers;
    public DbClusterEndpointList withStaticMembers(String[] staticMembers) {
        this.staticMembers = staticMembers;
        return this;
    }
    public String status;
    public DbClusterEndpointList withStatus(String status) {
        this.status = status;
        return this;
    }
}