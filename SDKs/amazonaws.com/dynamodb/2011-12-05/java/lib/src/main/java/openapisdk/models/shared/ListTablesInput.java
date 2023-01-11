package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListTablesInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExclusiveStartTableName")
    public String exclusiveStartTableName;
    public ListTablesInput withExclusiveStartTableName(String exclusiveStartTableName) {
        this.exclusiveStartTableName = exclusiveStartTableName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Limit")
    public Long limit;
    public ListTablesInput withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
}