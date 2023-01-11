package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RdsSourceConfig
 * Contains information about the Amazon Relational Database Service (RDS) configuration.
**/
public class RdsSourceConfig {
    @JsonProperty("DBInstanceIdentifier")
    public String dbInstanceIdentifier;
    public RdsSourceConfig withDbInstanceIdentifier(String dbInstanceIdentifier) {
        this.dbInstanceIdentifier = dbInstanceIdentifier;
        return this;
    }
    @JsonProperty("DatabaseHost")
    public String databaseHost;
    public RdsSourceConfig withDatabaseHost(String databaseHost) {
        this.databaseHost = databaseHost;
        return this;
    }
    @JsonProperty("DatabaseName")
    public String databaseName;
    public RdsSourceConfig withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
    @JsonProperty("DatabasePort")
    public Long databasePort;
    public RdsSourceConfig withDatabasePort(Long databasePort) {
        this.databasePort = databasePort;
        return this;
    }
    @JsonProperty("RoleArn")
    public String roleArn;
    public RdsSourceConfig withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonProperty("SecretManagerArn")
    public String secretManagerArn;
    public RdsSourceConfig withSecretManagerArn(String secretManagerArn) {
        this.secretManagerArn = secretManagerArn;
        return this;
    }
    @JsonProperty("TableName")
    public String tableName;
    public RdsSourceConfig withTableName(String tableName) {
        this.tableName = tableName;
        return this;
    }
    @JsonProperty("VpcConfiguration")
    public VpcConfiguration vpcConfiguration;
    public RdsSourceConfig withVpcConfiguration(VpcConfiguration vpcConfiguration) {
        this.vpcConfiguration = vpcConfiguration;
        return this;
    }
}