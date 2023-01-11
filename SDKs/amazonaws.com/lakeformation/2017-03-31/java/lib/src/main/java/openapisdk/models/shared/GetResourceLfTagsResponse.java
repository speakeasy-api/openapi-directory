package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetResourceLfTagsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LFTagOnDatabase")
    public LfTagPair[] lfTagOnDatabase;
    public GetResourceLfTagsResponse withLfTagOnDatabase(LfTagPair[] lfTagOnDatabase) {
        this.lfTagOnDatabase = lfTagOnDatabase;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LFTagsOnColumns")
    public ColumnLfTag[] lfTagsOnColumns;
    public GetResourceLfTagsResponse withLfTagsOnColumns(ColumnLfTag[] lfTagsOnColumns) {
        this.lfTagsOnColumns = lfTagsOnColumns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LFTagsOnTable")
    public LfTagPair[] lfTagsOnTable;
    public GetResourceLfTagsResponse withLfTagsOnTable(LfTagPair[] lfTagsOnTable) {
        this.lfTagsOnTable = lfTagsOnTable;
        return this;
    }
}