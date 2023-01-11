package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RedshiftDataSpec
 * Describes the data specification of an Amazon Redshift <code>DataSource</code>.
**/
public class RedshiftDataSpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataRearrangement")
    public String dataRearrangement;
    public RedshiftDataSpec withDataRearrangement(String dataRearrangement) {
        this.dataRearrangement = dataRearrangement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataSchema")
    public String dataSchema;
    public RedshiftDataSpec withDataSchema(String dataSchema) {
        this.dataSchema = dataSchema;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataSchemaUri")
    public String dataSchemaUri;
    public RedshiftDataSpec withDataSchemaUri(String dataSchemaUri) {
        this.dataSchemaUri = dataSchemaUri;
        return this;
    }
    @JsonProperty("DatabaseCredentials")
    public RedshiftDatabaseCredentials databaseCredentials;
    public RedshiftDataSpec withDatabaseCredentials(RedshiftDatabaseCredentials databaseCredentials) {
        this.databaseCredentials = databaseCredentials;
        return this;
    }
    @JsonProperty("DatabaseInformation")
    public RedshiftDatabase databaseInformation;
    public RedshiftDataSpec withDatabaseInformation(RedshiftDatabase databaseInformation) {
        this.databaseInformation = databaseInformation;
        return this;
    }
    @JsonProperty("S3StagingLocation")
    public String s3StagingLocation;
    public RedshiftDataSpec withS3StagingLocation(String s3StagingLocation) {
        this.s3StagingLocation = s3StagingLocation;
        return this;
    }
    @JsonProperty("SelectSqlQuery")
    public String selectSqlQuery;
    public RedshiftDataSpec withSelectSqlQuery(String selectSqlQuery) {
        this.selectSqlQuery = selectSqlQuery;
        return this;
    }
}