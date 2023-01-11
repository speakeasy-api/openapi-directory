package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CopyCommand
 * Describes a <code>COPY</code> command for Amazon Redshift.
**/
public class CopyCommand {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CopyOptions")
    public String copyOptions;
    public CopyCommand withCopyOptions(String copyOptions) {
        this.copyOptions = copyOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataTableColumns")
    public String dataTableColumns;
    public CopyCommand withDataTableColumns(String dataTableColumns) {
        this.dataTableColumns = dataTableColumns;
        return this;
    }
    @JsonProperty("DataTableName")
    public String dataTableName;
    public CopyCommand withDataTableName(String dataTableName) {
        this.dataTableName = dataTableName;
        return this;
    }
}