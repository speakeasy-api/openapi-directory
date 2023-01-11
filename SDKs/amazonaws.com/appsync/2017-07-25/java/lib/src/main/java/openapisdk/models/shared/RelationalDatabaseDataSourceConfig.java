package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RelationalDatabaseDataSourceConfig
 * Describes a relational database data source configuration.
**/
public class RelationalDatabaseDataSourceConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rdsHttpEndpointConfig")
    public RdsHttpEndpointConfig rdsHttpEndpointConfig;
    public RelationalDatabaseDataSourceConfig withRdsHttpEndpointConfig(RdsHttpEndpointConfig rdsHttpEndpointConfig) {
        this.rdsHttpEndpointConfig = rdsHttpEndpointConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relationalDatabaseSourceType")
    public RelationalDatabaseSourceTypeEnum relationalDatabaseSourceType;
    public RelationalDatabaseDataSourceConfig withRelationalDatabaseSourceType(RelationalDatabaseSourceTypeEnum relationalDatabaseSourceType) {
        this.relationalDatabaseSourceType = relationalDatabaseSourceType;
        return this;
    }
}