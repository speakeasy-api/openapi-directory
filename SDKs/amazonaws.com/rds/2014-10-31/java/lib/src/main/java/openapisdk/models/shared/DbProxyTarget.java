package openapisdk.models.shared;



/**
 * DbProxyTarget
 * <p>Contains the details for an RDS Proxy target. It represents an RDS DB instance or Aurora DB cluster that the proxy can connect to. One or more targets are associated with an RDS Proxy target group.</p> <p>This data type is used as a response element in the <code>DescribeDBProxyTargets</code> action.</p>
**/
public class DbProxyTarget {
    public String endpoint;
    public DbProxyTarget withEndpoint(String endpoint) {
        this.endpoint = endpoint;
        return this;
    }
    public Long port;
    public DbProxyTarget withPort(Long port) {
        this.port = port;
        return this;
    }
    public String rdsResourceId;
    public DbProxyTarget withRdsResourceId(String rdsResourceId) {
        this.rdsResourceId = rdsResourceId;
        return this;
    }
    public TargetRoleEnum role;
    public DbProxyTarget withRole(TargetRoleEnum role) {
        this.role = role;
        return this;
    }
    public String targetArn;
    public DbProxyTarget withTargetArn(String targetArn) {
        this.targetArn = targetArn;
        return this;
    }
    public TargetHealth targetHealth;
    public DbProxyTarget withTargetHealth(TargetHealth targetHealth) {
        this.targetHealth = targetHealth;
        return this;
    }
    public String trackedClusterId;
    public DbProxyTarget withTrackedClusterId(String trackedClusterId) {
        this.trackedClusterId = trackedClusterId;
        return this;
    }
    public TargetTypeEnum type;
    public DbProxyTarget withType(TargetTypeEnum type) {
        this.type = type;
        return this;
    }
}