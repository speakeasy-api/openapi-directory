package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RdsDataSpec
 * The data specification of an Amazon Relational Database Service (Amazon RDS) <code>DataSource</code>.
**/
public class RdsDataSpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataRearrangement")
    public String dataRearrangement;
    public RdsDataSpec withDataRearrangement(String dataRearrangement) {
        this.dataRearrangement = dataRearrangement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataSchema")
    public String dataSchema;
    public RdsDataSpec withDataSchema(String dataSchema) {
        this.dataSchema = dataSchema;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataSchemaUri")
    public String dataSchemaUri;
    public RdsDataSpec withDataSchemaUri(String dataSchemaUri) {
        this.dataSchemaUri = dataSchemaUri;
        return this;
    }
    @JsonProperty("DatabaseCredentials")
    public RdsDatabaseCredentials databaseCredentials;
    public RdsDataSpec withDatabaseCredentials(RdsDatabaseCredentials databaseCredentials) {
        this.databaseCredentials = databaseCredentials;
        return this;
    }
    @JsonProperty("DatabaseInformation")
    public RdsDatabase databaseInformation;
    public RdsDataSpec withDatabaseInformation(RdsDatabase databaseInformation) {
        this.databaseInformation = databaseInformation;
        return this;
    }
    @JsonProperty("ResourceRole")
    public String resourceRole;
    public RdsDataSpec withResourceRole(String resourceRole) {
        this.resourceRole = resourceRole;
        return this;
    }
    @JsonProperty("S3StagingLocation")
    public String s3StagingLocation;
    public RdsDataSpec withS3StagingLocation(String s3StagingLocation) {
        this.s3StagingLocation = s3StagingLocation;
        return this;
    }
    @JsonProperty("SecurityGroupIds")
    public String[] securityGroupIds;
    public RdsDataSpec withSecurityGroupIds(String[] securityGroupIds) {
        this.securityGroupIds = securityGroupIds;
        return this;
    }
    @JsonProperty("SelectSqlQuery")
    public String selectSqlQuery;
    public RdsDataSpec withSelectSqlQuery(String selectSqlQuery) {
        this.selectSqlQuery = selectSqlQuery;
        return this;
    }
    @JsonProperty("ServiceRole")
    public String serviceRole;
    public RdsDataSpec withServiceRole(String serviceRole) {
        this.serviceRole = serviceRole;
        return this;
    }
    @JsonProperty("SubnetId")
    public String subnetId;
    public RdsDataSpec withSubnetId(String subnetId) {
        this.subnetId = subnetId;
        return this;
    }
}