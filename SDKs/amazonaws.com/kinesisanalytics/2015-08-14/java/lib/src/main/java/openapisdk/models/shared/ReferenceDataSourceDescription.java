package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReferenceDataSourceDescription
 * Describes the reference data source configured for an application.
**/
public class ReferenceDataSourceDescription {
    @JsonProperty("ReferenceId")
    public String referenceId;
    public ReferenceDataSourceDescription withReferenceId(String referenceId) {
        this.referenceId = referenceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReferenceSchema")
    public SourceSchema referenceSchema;
    public ReferenceDataSourceDescription withReferenceSchema(SourceSchema referenceSchema) {
        this.referenceSchema = referenceSchema;
        return this;
    }
    @JsonProperty("S3ReferenceDataSourceDescription")
    public S3ReferenceDataSourceDescription s3ReferenceDataSourceDescription;
    public ReferenceDataSourceDescription withS3ReferenceDataSourceDescription(S3ReferenceDataSourceDescription s3ReferenceDataSourceDescription) {
        this.s3ReferenceDataSourceDescription = s3ReferenceDataSourceDescription;
        return this;
    }
    @JsonProperty("TableName")
    public String tableName;
    public ReferenceDataSourceDescription withTableName(String tableName) {
        this.tableName = tableName;
        return this;
    }
}