package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RdsHttpEndpointConfig
 * The Amazon RDS HTTP endpoint configuration.
**/
public class RdsHttpEndpointConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("awsRegion")
    public String awsRegion;
    public RdsHttpEndpointConfig withAwsRegion(String awsRegion) {
        this.awsRegion = awsRegion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("awsSecretStoreArn")
    public String awsSecretStoreArn;
    public RdsHttpEndpointConfig withAwsSecretStoreArn(String awsSecretStoreArn) {
        this.awsSecretStoreArn = awsSecretStoreArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("databaseName")
    public String databaseName;
    public RdsHttpEndpointConfig withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dbClusterIdentifier")
    public String dbClusterIdentifier;
    public RdsHttpEndpointConfig withDbClusterIdentifier(String dbClusterIdentifier) {
        this.dbClusterIdentifier = dbClusterIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schema")
    public String schema;
    public RdsHttpEndpointConfig withSchema(String schema) {
        this.schema = schema;
        return this;
    }
}