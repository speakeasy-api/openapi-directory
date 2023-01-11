package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * DbProxy
 * <p>The data structure representing a proxy managed by the RDS Proxy.</p> <p>This data type is used as a response element in the <code>DescribeDBProxies</code> action.</p>
**/
public class DbProxy {
    public UserAuthConfigInfo[] auth;
    public DbProxy withAuth(UserAuthConfigInfo[] auth) {
        this.auth = auth;
        return this;
    }
    public OffsetDateTime createdDate;
    public DbProxy withCreatedDate(OffsetDateTime createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    public String dbProxyArn;
    public DbProxy withDbProxyArn(String dbProxyArn) {
        this.dbProxyArn = dbProxyArn;
        return this;
    }
    public String dbProxyName;
    public DbProxy withDbProxyName(String dbProxyName) {
        this.dbProxyName = dbProxyName;
        return this;
    }
    public Boolean debugLogging;
    public DbProxy withDebugLogging(Boolean debugLogging) {
        this.debugLogging = debugLogging;
        return this;
    }
    public String endpoint;
    public DbProxy withEndpoint(String endpoint) {
        this.endpoint = endpoint;
        return this;
    }
    public String engineFamily;
    public DbProxy withEngineFamily(String engineFamily) {
        this.engineFamily = engineFamily;
        return this;
    }
    public Long idleClientTimeout;
    public DbProxy withIdleClientTimeout(Long idleClientTimeout) {
        this.idleClientTimeout = idleClientTimeout;
        return this;
    }
    public Boolean requireTLS;
    public DbProxy withRequireTls(Boolean requireTLS) {
        this.requireTLS = requireTLS;
        return this;
    }
    public String roleArn;
    public DbProxy withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    public DbProxyStatusEnum status;
    public DbProxy withStatus(DbProxyStatusEnum status) {
        this.status = status;
        return this;
    }
    public OffsetDateTime updatedDate;
    public DbProxy withUpdatedDate(OffsetDateTime updatedDate) {
        this.updatedDate = updatedDate;
        return this;
    }
    public String vpcId;
    public DbProxy withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
    public String[] vpcSecurityGroupIds;
    public DbProxy withVpcSecurityGroupIds(String[] vpcSecurityGroupIds) {
        this.vpcSecurityGroupIds = vpcSecurityGroupIds;
        return this;
    }
    public String[] vpcSubnetIds;
    public DbProxy withVpcSubnetIds(String[] vpcSubnetIds) {
        this.vpcSubnetIds = vpcSubnetIds;
        return this;
    }
}