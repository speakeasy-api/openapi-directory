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
 * RelationalDatabaseSnapshot
 * Describes a database snapshot.
**/
public class RelationalDatabaseSnapshot {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public RelationalDatabaseSnapshot withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public RelationalDatabaseSnapshot withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("engine")
    public String engine;
    public RelationalDatabaseSnapshot withEngine(String engine) {
        this.engine = engine;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("engineVersion")
    public String engineVersion;
    public RelationalDatabaseSnapshot withEngineVersion(String engineVersion) {
        this.engineVersion = engineVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fromRelationalDatabaseArn")
    public String fromRelationalDatabaseArn;
    public RelationalDatabaseSnapshot withFromRelationalDatabaseArn(String fromRelationalDatabaseArn) {
        this.fromRelationalDatabaseArn = fromRelationalDatabaseArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fromRelationalDatabaseBlueprintId")
    public String fromRelationalDatabaseBlueprintId;
    public RelationalDatabaseSnapshot withFromRelationalDatabaseBlueprintId(String fromRelationalDatabaseBlueprintId) {
        this.fromRelationalDatabaseBlueprintId = fromRelationalDatabaseBlueprintId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fromRelationalDatabaseBundleId")
    public String fromRelationalDatabaseBundleId;
    public RelationalDatabaseSnapshot withFromRelationalDatabaseBundleId(String fromRelationalDatabaseBundleId) {
        this.fromRelationalDatabaseBundleId = fromRelationalDatabaseBundleId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fromRelationalDatabaseName")
    public String fromRelationalDatabaseName;
    public RelationalDatabaseSnapshot withFromRelationalDatabaseName(String fromRelationalDatabaseName) {
        this.fromRelationalDatabaseName = fromRelationalDatabaseName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public ResourceLocation location;
    public RelationalDatabaseSnapshot withLocation(ResourceLocation location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public RelationalDatabaseSnapshot withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceType")
    public ResourceTypeEnum resourceType;
    public RelationalDatabaseSnapshot withResourceType(ResourceTypeEnum resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sizeInGb")
    public Long sizeInGb;
    public RelationalDatabaseSnapshot withSizeInGb(Long sizeInGb) {
        this.sizeInGb = sizeInGb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public String state;
    public RelationalDatabaseSnapshot withState(String state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportCode")
    public String supportCode;
    public RelationalDatabaseSnapshot withSupportCode(String supportCode) {
        this.supportCode = supportCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public Tag[] tags;
    public RelationalDatabaseSnapshot withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}