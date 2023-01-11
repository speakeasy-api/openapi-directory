package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * DbProxyTargetGroup
 * <p>Represents a set of RDS DB instances, Aurora DB clusters, or both that a proxy can connect to. Currently, each target group is associated with exactly one RDS DB instance or Aurora DB cluster.</p> <p>This data type is used as a response element in the <code>DescribeDBProxyTargetGroups</code> action.</p>
**/
public class DbProxyTargetGroup {
    public ConnectionPoolConfigurationInfo connectionPoolConfig;
    public DbProxyTargetGroup withConnectionPoolConfig(ConnectionPoolConfigurationInfo connectionPoolConfig) {
        this.connectionPoolConfig = connectionPoolConfig;
        return this;
    }
    public OffsetDateTime createdDate;
    public DbProxyTargetGroup withCreatedDate(OffsetDateTime createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    public String dbProxyName;
    public DbProxyTargetGroup withDbProxyName(String dbProxyName) {
        this.dbProxyName = dbProxyName;
        return this;
    }
    public Boolean isDefault;
    public DbProxyTargetGroup withIsDefault(Boolean isDefault) {
        this.isDefault = isDefault;
        return this;
    }
    public String status;
    public DbProxyTargetGroup withStatus(String status) {
        this.status = status;
        return this;
    }
    public String targetGroupArn;
    public DbProxyTargetGroup withTargetGroupArn(String targetGroupArn) {
        this.targetGroupArn = targetGroupArn;
        return this;
    }
    public String targetGroupName;
    public DbProxyTargetGroup withTargetGroupName(String targetGroupName) {
        this.targetGroupName = targetGroupName;
        return this;
    }
    public OffsetDateTime updatedDate;
    public DbProxyTargetGroup withUpdatedDate(OffsetDateTime updatedDate) {
        this.updatedDate = updatedDate;
        return this;
    }
}