package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTableVersionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CatalogId")
    public String catalogId;
    public GetTableVersionRequest withCatalogId(String catalogId) {
        this.catalogId = catalogId;
        return this;
    }
    @JsonProperty("DatabaseName")
    public String databaseName;
    public GetTableVersionRequest withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
    @JsonProperty("TableName")
    public String tableName;
    public GetTableVersionRequest withTableName(String tableName) {
        this.tableName = tableName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VersionId")
    public String versionId;
    public GetTableVersionRequest withVersionId(String versionId) {
        this.versionId = versionId;
        return this;
    }
}