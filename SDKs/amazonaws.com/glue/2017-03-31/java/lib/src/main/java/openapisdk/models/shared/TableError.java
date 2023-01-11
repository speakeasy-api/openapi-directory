package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TableError
 * An error record for table operations.
**/
public class TableError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorDetail")
    public ErrorDetail errorDetail;
    public TableError withErrorDetail(ErrorDetail errorDetail) {
        this.errorDetail = errorDetail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TableName")
    public String tableName;
    public TableError withTableName(String tableName) {
        this.tableName = tableName;
        return this;
    }
}