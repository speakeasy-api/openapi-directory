package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RdsMetadata
 * The datasource details that are specific to Amazon RDS.
**/
public class RdsMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataPipelineId")
    public String dataPipelineId;
    public RdsMetadata withDataPipelineId(String dataPipelineId) {
        this.dataPipelineId = dataPipelineId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Database")
    public RdsDatabase database;
    public RdsMetadata withDatabase(RdsDatabase database) {
        this.database = database;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DatabaseUserName")
    public String databaseUserName;
    public RdsMetadata withDatabaseUserName(String databaseUserName) {
        this.databaseUserName = databaseUserName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceRole")
    public String resourceRole;
    public RdsMetadata withResourceRole(String resourceRole) {
        this.resourceRole = resourceRole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SelectSqlQuery")
    public String selectSqlQuery;
    public RdsMetadata withSelectSqlQuery(String selectSqlQuery) {
        this.selectSqlQuery = selectSqlQuery;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceRole")
    public String serviceRole;
    public RdsMetadata withServiceRole(String serviceRole) {
        this.serviceRole = serviceRole;
        return this;
    }
}