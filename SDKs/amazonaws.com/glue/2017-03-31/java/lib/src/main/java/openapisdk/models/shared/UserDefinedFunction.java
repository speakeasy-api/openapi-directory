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
 * UserDefinedFunction
 * Represents the equivalent of a Hive user-defined function (<code>UDF</code>) definition.
**/
public class UserDefinedFunction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CatalogId")
    public String catalogId;
    public UserDefinedFunction withCatalogId(String catalogId) {
        this.catalogId = catalogId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClassName")
    public String className;
    public UserDefinedFunction withClassName(String className) {
        this.className = className;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreateTime")
    public OffsetDateTime createTime;
    public UserDefinedFunction withCreateTime(OffsetDateTime createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DatabaseName")
    public String databaseName;
    public UserDefinedFunction withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FunctionName")
    public String functionName;
    public UserDefinedFunction withFunctionName(String functionName) {
        this.functionName = functionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OwnerName")
    public String ownerName;
    public UserDefinedFunction withOwnerName(String ownerName) {
        this.ownerName = ownerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OwnerType")
    public PrincipalTypeEnum ownerType;
    public UserDefinedFunction withOwnerType(PrincipalTypeEnum ownerType) {
        this.ownerType = ownerType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceUris")
    public ResourceUri[] resourceUris;
    public UserDefinedFunction withResourceUris(ResourceUri[] resourceUris) {
        this.resourceUris = resourceUris;
        return this;
    }
}