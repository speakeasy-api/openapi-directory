package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TableVersionError
 * An error record for table-version operations.
**/
public class TableVersionError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorDetail")
    public ErrorDetail errorDetail;
    public TableVersionError withErrorDetail(ErrorDetail errorDetail) {
        this.errorDetail = errorDetail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TableName")
    public String tableName;
    public TableVersionError withTableName(String tableName) {
        this.tableName = tableName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VersionId")
    public String versionId;
    public TableVersionError withVersionId(String versionId) {
        this.versionId = versionId;
        return this;
    }
}