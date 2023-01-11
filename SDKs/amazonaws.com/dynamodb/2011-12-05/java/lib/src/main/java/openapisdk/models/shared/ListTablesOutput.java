package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListTablesOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastEvaluatedTableName")
    public String lastEvaluatedTableName;
    public ListTablesOutput withLastEvaluatedTableName(String lastEvaluatedTableName) {
        this.lastEvaluatedTableName = lastEvaluatedTableName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TableNames")
    public String[] tableNames;
    public ListTablesOutput withTableNames(String[] tableNames) {
        this.tableNames = tableNames;
        return this;
    }
}