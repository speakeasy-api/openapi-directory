package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RedshiftSourceConfig
 * Provides information about the Amazon Redshift database configuration.
**/
public class RedshiftSourceConfig {
    @JsonProperty("ClusterIdentifier")
    public String clusterIdentifier;
    public RedshiftSourceConfig withClusterIdentifier(String clusterIdentifier) {
        this.clusterIdentifier = clusterIdentifier;
        return this;
    }
    @JsonProperty("DatabaseHost")
    public String databaseHost;
    public RedshiftSourceConfig withDatabaseHost(String databaseHost) {
        this.databaseHost = databaseHost;
        return this;
    }
    @JsonProperty("DatabaseName")
    public String databaseName;
    public RedshiftSourceConfig withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
    @JsonProperty("DatabasePort")
    public Long databasePort;
    public RedshiftSourceConfig withDatabasePort(Long databasePort) {
        this.databasePort = databasePort;
        return this;
    }
    @JsonProperty("RoleArn")
    public String roleArn;
    public RedshiftSourceConfig withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonProperty("SecretManagerArn")
    public String secretManagerArn;
    public RedshiftSourceConfig withSecretManagerArn(String secretManagerArn) {
        this.secretManagerArn = secretManagerArn;
        return this;
    }
    @JsonProperty("TableName")
    public String tableName;
    public RedshiftSourceConfig withTableName(String tableName) {
        this.tableName = tableName;
        return this;
    }
    @JsonProperty("VpcConfiguration")
    public VpcConfiguration vpcConfiguration;
    public RedshiftSourceConfig withVpcConfiguration(VpcConfiguration vpcConfiguration) {
        this.vpcConfiguration = vpcConfiguration;
        return this;
    }
}