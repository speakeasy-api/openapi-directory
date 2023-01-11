package openapisdk.models.shared;



/**
 * CreateDbClusterEndpointOutput
 * <p>This data type represents the information you need to connect to an Amazon Neptune DB cluster. This data type is used as a response element in the following actions:</p> <ul> <li> <p> <code>CreateDBClusterEndpoint</code> </p> </li> <li> <p> <code>DescribeDBClusterEndpoints</code> </p> </li> <li> <p> <code>ModifyDBClusterEndpoint</code> </p> </li> <li> <p> <code>DeleteDBClusterEndpoint</code> </p> </li> </ul> <p>For the data structure that represents Amazon Neptune DB instance endpoints, see <code>Endpoint</code>.</p>
**/
public class CreateDbClusterEndpointOutput {
    public String customEndpointType;
    public CreateDbClusterEndpointOutput withCustomEndpointType(String customEndpointType) {
        this.customEndpointType = customEndpointType;
        return this;
    }
    public String dbClusterEndpointArn;
    public CreateDbClusterEndpointOutput withDbClusterEndpointArn(String dbClusterEndpointArn) {
        this.dbClusterEndpointArn = dbClusterEndpointArn;
        return this;
    }
    public String dbClusterEndpointIdentifier;
    public CreateDbClusterEndpointOutput withDbClusterEndpointIdentifier(String dbClusterEndpointIdentifier) {
        this.dbClusterEndpointIdentifier = dbClusterEndpointIdentifier;
        return this;
    }
    public String dbClusterEndpointResourceIdentifier;
    public CreateDbClusterEndpointOutput withDbClusterEndpointResourceIdentifier(String dbClusterEndpointResourceIdentifier) {
        this.dbClusterEndpointResourceIdentifier = dbClusterEndpointResourceIdentifier;
        return this;
    }
    public String dbClusterIdentifier;
    public CreateDbClusterEndpointOutput withDbClusterIdentifier(String dbClusterIdentifier) {
        this.dbClusterIdentifier = dbClusterIdentifier;
        return this;
    }
    public String endpoint;
    public CreateDbClusterEndpointOutput withEndpoint(String endpoint) {
        this.endpoint = endpoint;
        return this;
    }
    public String endpointType;
    public CreateDbClusterEndpointOutput withEndpointType(String endpointType) {
        this.endpointType = endpointType;
        return this;
    }
    public String[] excludedMembers;
    public CreateDbClusterEndpointOutput withExcludedMembers(String[] excludedMembers) {
        this.excludedMembers = excludedMembers;
        return this;
    }
    public String[] staticMembers;
    public CreateDbClusterEndpointOutput withStaticMembers(String[] staticMembers) {
        this.staticMembers = staticMembers;
        return this;
    }
    public String status;
    public CreateDbClusterEndpointOutput withStatus(String status) {
        this.status = status;
        return this;
    }
}