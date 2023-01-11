package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DynamodbDataSourceConfig
 * Describes an Amazon DynamoDB data source configuration.
**/
public class DynamodbDataSourceConfig {
    @JsonProperty("awsRegion")
    public String awsRegion;
    public DynamodbDataSourceConfig withAwsRegion(String awsRegion) {
        this.awsRegion = awsRegion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deltaSyncConfig")
    public DeltaSyncConfig deltaSyncConfig;
    public DynamodbDataSourceConfig withDeltaSyncConfig(DeltaSyncConfig deltaSyncConfig) {
        this.deltaSyncConfig = deltaSyncConfig;
        return this;
    }
    @JsonProperty("tableName")
    public String tableName;
    public DynamodbDataSourceConfig withTableName(String tableName) {
        this.tableName = tableName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("useCallerCredentials")
    public Boolean useCallerCredentials;
    public DynamodbDataSourceConfig withUseCallerCredentials(Boolean useCallerCredentials) {
        this.useCallerCredentials = useCallerCredentials;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("versioned")
    public Boolean versioned;
    public DynamodbDataSourceConfig withVersioned(Boolean versioned) {
        this.versioned = versioned;
        return this;
    }
}