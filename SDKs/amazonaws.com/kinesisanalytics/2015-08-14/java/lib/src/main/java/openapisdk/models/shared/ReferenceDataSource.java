package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReferenceDataSource
 * Describes the reference data source by providing the source information (S3 bucket name and object key name), the resulting in-application table name that is created, and the necessary schema to map the data elements in the Amazon S3 object to the in-application table.
**/
public class ReferenceDataSource {
    @JsonProperty("ReferenceSchema")
    public SourceSchema referenceSchema;
    public ReferenceDataSource withReferenceSchema(SourceSchema referenceSchema) {
        this.referenceSchema = referenceSchema;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3ReferenceDataSource")
    public S3ReferenceDataSource s3ReferenceDataSource;
    public ReferenceDataSource withS3ReferenceDataSource(S3ReferenceDataSource s3ReferenceDataSource) {
        this.s3ReferenceDataSource = s3ReferenceDataSource;
        return this;
    }
    @JsonProperty("TableName")
    public String tableName;
    public ReferenceDataSource withTableName(String tableName) {
        this.tableName = tableName;
        return this;
    }
}