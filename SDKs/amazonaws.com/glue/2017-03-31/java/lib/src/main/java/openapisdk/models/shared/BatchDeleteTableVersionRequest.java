package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchDeleteTableVersionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CatalogId")
    public String catalogId;
    public BatchDeleteTableVersionRequest withCatalogId(String catalogId) {
        this.catalogId = catalogId;
        return this;
    }
    @JsonProperty("DatabaseName")
    public String databaseName;
    public BatchDeleteTableVersionRequest withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
    @JsonProperty("TableName")
    public String tableName;
    public BatchDeleteTableVersionRequest withTableName(String tableName) {
        this.tableName = tableName;
        return this;
    }
    @JsonProperty("VersionIds")
    public String[] versionIds;
    public BatchDeleteTableVersionRequest withVersionIds(String[] versionIds) {
        this.versionIds = versionIds;
        return this;
    }
}