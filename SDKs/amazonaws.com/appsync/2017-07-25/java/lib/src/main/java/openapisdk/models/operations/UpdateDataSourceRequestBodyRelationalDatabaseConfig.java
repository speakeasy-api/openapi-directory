package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateDataSourceRequestBodyRelationalDatabaseConfig
 * Describes a relational database data source configuration.
**/
public class UpdateDataSourceRequestBodyRelationalDatabaseConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rdsHttpEndpointConfig")
    public openapisdk.models.shared.RdsHttpEndpointConfig rdsHttpEndpointConfig;
    public UpdateDataSourceRequestBodyRelationalDatabaseConfig withRdsHttpEndpointConfig(openapisdk.models.shared.RdsHttpEndpointConfig rdsHttpEndpointConfig) {
        this.rdsHttpEndpointConfig = rdsHttpEndpointConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relationalDatabaseSourceType")
    public openapisdk.models.shared.RelationalDatabaseSourceTypeEnum relationalDatabaseSourceType;
    public UpdateDataSourceRequestBodyRelationalDatabaseConfig withRelationalDatabaseSourceType(openapisdk.models.shared.RelationalDatabaseSourceTypeEnum relationalDatabaseSourceType) {
        this.relationalDatabaseSourceType = relationalDatabaseSourceType;
        return this;
    }
}