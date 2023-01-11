package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateDataSourceRequestBodyDynamodbConfig
 * Describes an Amazon DynamoDB data source configuration.
**/
public class CreateDataSourceRequestBodyDynamodbConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("awsRegion")
    public String awsRegion;
    public CreateDataSourceRequestBodyDynamodbConfig withAwsRegion(String awsRegion) {
        this.awsRegion = awsRegion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deltaSyncConfig")
    public openapisdk.models.shared.DeltaSyncConfig deltaSyncConfig;
    public CreateDataSourceRequestBodyDynamodbConfig withDeltaSyncConfig(openapisdk.models.shared.DeltaSyncConfig deltaSyncConfig) {
        this.deltaSyncConfig = deltaSyncConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tableName")
    public String tableName;
    public CreateDataSourceRequestBodyDynamodbConfig withTableName(String tableName) {
        this.tableName = tableName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("useCallerCredentials")
    public Boolean useCallerCredentials;
    public CreateDataSourceRequestBodyDynamodbConfig withUseCallerCredentials(Boolean useCallerCredentials) {
        this.useCallerCredentials = useCallerCredentials;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("versioned")
    public Boolean versioned;
    public CreateDataSourceRequestBodyDynamodbConfig withVersioned(Boolean versioned) {
        this.versioned = versioned;
        return this;
    }
}