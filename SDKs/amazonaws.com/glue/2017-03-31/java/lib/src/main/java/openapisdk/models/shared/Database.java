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
 * Database
 * The <code>Database</code> object represents a logical grouping of tables that might reside in a Hive metastore or an RDBMS.
**/
public class Database {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CatalogId")
    public String catalogId;
    public Database withCatalogId(String catalogId) {
        this.catalogId = catalogId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreateTableDefaultPermissions")
    public PrincipalPermissions[] createTableDefaultPermissions;
    public Database withCreateTableDefaultPermissions(PrincipalPermissions[] createTableDefaultPermissions) {
        this.createTableDefaultPermissions = createTableDefaultPermissions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreateTime")
    public OffsetDateTime createTime;
    public Database withCreateTime(OffsetDateTime createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public Database withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LocationUri")
    public String locationUri;
    public Database withLocationUri(String locationUri) {
        this.locationUri = locationUri;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public Database withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Parameters")
    public java.util.Map<String, String> parameters;
    public Database withParameters(java.util.Map<String, String> parameters) {
        this.parameters = parameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TargetDatabase")
    public DatabaseIdentifier targetDatabase;
    public Database withTargetDatabase(DatabaseIdentifier targetDatabase) {
        this.targetDatabase = targetDatabase;
        return this;
    }
}