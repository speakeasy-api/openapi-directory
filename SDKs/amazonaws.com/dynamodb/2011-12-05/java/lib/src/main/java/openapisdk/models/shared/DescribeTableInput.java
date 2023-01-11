package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeTableInput {
    @JsonProperty("TableName")
    public String tableName;
    public DescribeTableInput withTableName(String tableName) {
        this.tableName = tableName;
        return this;
    }
}