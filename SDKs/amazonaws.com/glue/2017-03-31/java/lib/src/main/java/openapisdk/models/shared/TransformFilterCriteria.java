package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * TransformFilterCriteria
 * The criteria used to filter the machine learning transforms.
**/
public class TransformFilterCriteria {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreatedAfter")
    public OffsetDateTime createdAfter;
    public TransformFilterCriteria withCreatedAfter(OffsetDateTime createdAfter) {
        this.createdAfter = createdAfter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreatedBefore")
    public OffsetDateTime createdBefore;
    public TransformFilterCriteria withCreatedBefore(OffsetDateTime createdBefore) {
        this.createdBefore = createdBefore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GlueVersion")
    public String glueVersion;
    public TransformFilterCriteria withGlueVersion(String glueVersion) {
        this.glueVersion = glueVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastModifiedAfter")
    public OffsetDateTime lastModifiedAfter;
    public TransformFilterCriteria withLastModifiedAfter(OffsetDateTime lastModifiedAfter) {
        this.lastModifiedAfter = lastModifiedAfter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastModifiedBefore")
    public OffsetDateTime lastModifiedBefore;
    public TransformFilterCriteria withLastModifiedBefore(OffsetDateTime lastModifiedBefore) {
        this.lastModifiedBefore = lastModifiedBefore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public TransformFilterCriteria withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Schema")
    public SchemaColumn[] schema;
    public TransformFilterCriteria withSchema(SchemaColumn[] schema) {
        this.schema = schema;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public TransformStatusTypeEnum status;
    public TransformFilterCriteria withStatus(TransformStatusTypeEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TransformType")
    public TransformTypeEnum transformType;
    public TransformFilterCriteria withTransformType(TransformTypeEnum transformType) {
        this.transformType = transformType;
        return this;
    }
}