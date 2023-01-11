package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TableVersion
 * Specifies a version of a table.
**/
public class TableVersion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Table")
    public Table table;
    public TableVersion withTable(Table table) {
        this.table = table;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VersionId")
    public String versionId;
    public TableVersion withVersionId(String versionId) {
        this.versionId = versionId;
        return this;
    }
}