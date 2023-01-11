package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * DbProxyEndpoint
 * <p>The data structure representing an endpoint associated with a DB proxy. RDS automatically creates one endpoint for each DB proxy. For Aurora DB clusters, you can associate additional endpoints with the same DB proxy. These endpoints can be read/write or read-only. They can also reside in different VPCs than the associated DB proxy.</p> <p>This data type is used as a response element in the <code>DescribeDBProxyEndpoints</code> operation.</p>
**/
public class DbProxyEndpoint {
    public OffsetDateTime createdDate;
    public DbProxyEndpoint withCreatedDate(OffsetDateTime createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    public String dbProxyEndpointArn;
    public DbProxyEndpoint withDbProxyEndpointArn(String dbProxyEndpointArn) {
        this.dbProxyEndpointArn = dbProxyEndpointArn;
        return this;
    }
    public String dbProxyEndpointName;
    public DbProxyEndpoint withDbProxyEndpointName(String dbProxyEndpointName) {
        this.dbProxyEndpointName = dbProxyEndpointName;
        return this;
    }
    public String dbProxyName;
    public DbProxyEndpoint withDbProxyName(String dbProxyName) {
        this.dbProxyName = dbProxyName;
        return this;
    }
    public String endpoint;
    public DbProxyEndpoint withEndpoint(String endpoint) {
        this.endpoint = endpoint;
        return this;
    }
    public Boolean isDefault;
    public DbProxyEndpoint withIsDefault(Boolean isDefault) {
        this.isDefault = isDefault;
        return this;
    }
    public DbProxyEndpointStatusEnum status;
    public DbProxyEndpoint withStatus(DbProxyEndpointStatusEnum status) {
        this.status = status;
        return this;
    }
    public DbProxyEndpointTargetRoleEnum targetRole;
    public DbProxyEndpoint withTargetRole(DbProxyEndpointTargetRoleEnum targetRole) {
        this.targetRole = targetRole;
        return this;
    }
    public String vpcId;
    public DbProxyEndpoint withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
    public String[] vpcSecurityGroupIds;
    public DbProxyEndpoint withVpcSecurityGroupIds(String[] vpcSecurityGroupIds) {
        this.vpcSecurityGroupIds = vpcSecurityGroupIds;
        return this;
    }
    public String[] vpcSubnetIds;
    public DbProxyEndpoint withVpcSubnetIds(String[] vpcSubnetIds) {
        this.vpcSubnetIds = vpcSubnetIds;
        return this;
    }
}