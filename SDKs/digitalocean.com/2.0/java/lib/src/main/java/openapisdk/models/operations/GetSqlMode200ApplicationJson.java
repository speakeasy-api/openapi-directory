package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetSqlMode200ApplicationJson {
    @JsonProperty("sql_mode")
    public String sqlMode;
    public GetSqlMode200ApplicationJson withSqlMode(String sqlMode) {
        this.sqlMode = sqlMode;
        return this;
    }
}