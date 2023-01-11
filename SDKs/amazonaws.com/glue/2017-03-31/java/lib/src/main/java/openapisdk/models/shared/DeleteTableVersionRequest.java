package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteTableVersionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CatalogId")
    public String catalogId;
    public DeleteTableVersionRequest withCatalogId(String catalogId) {
        this.catalogId = catalogId;
        return this;
    }
    @JsonProperty("DatabaseName")
    public String databaseName;
    public DeleteTableVersionRequest withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
    @JsonProperty("TableName")
    public String tableName;
    public DeleteTableVersionRequest withTableName(String tableName) {
        this.tableName = tableName;
        return this;
    }
    @JsonProperty("VersionId")
    public String versionId;
    public DeleteTableVersionRequest withVersionId(String versionId) {
        this.versionId = versionId;
        return this;
    }
}