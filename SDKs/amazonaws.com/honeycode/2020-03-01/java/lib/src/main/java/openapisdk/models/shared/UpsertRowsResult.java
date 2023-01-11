package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpsertRowsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rowIds")
    public String[] rowIds;
    public UpsertRowsResult withRowIds(String[] rowIds) {
        this.rowIds = rowIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("upsertAction")
    public UpsertActionEnum upsertAction;
    public UpsertRowsResult withUpsertAction(UpsertActionEnum upsertAction) {
        this.upsertAction = upsertAction;
        return this;
    }
}