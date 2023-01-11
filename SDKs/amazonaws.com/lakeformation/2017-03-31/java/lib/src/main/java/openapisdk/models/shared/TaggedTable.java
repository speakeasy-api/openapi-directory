package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TaggedTable
 * A structure describing a table resource with tags.
**/
public class TaggedTable {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LFTagOnDatabase")
    public LfTagPair[] lfTagOnDatabase;
    public TaggedTable withLfTagOnDatabase(LfTagPair[] lfTagOnDatabase) {
        this.lfTagOnDatabase = lfTagOnDatabase;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LFTagsOnColumns")
    public ColumnLfTag[] lfTagsOnColumns;
    public TaggedTable withLfTagsOnColumns(ColumnLfTag[] lfTagsOnColumns) {
        this.lfTagsOnColumns = lfTagsOnColumns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LFTagsOnTable")
    public LfTagPair[] lfTagsOnTable;
    public TaggedTable withLfTagsOnTable(LfTagPair[] lfTagsOnTable) {
        this.lfTagsOnTable = lfTagsOnTable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Table")
    public TableResource table;
    public TaggedTable withTable(TableResource table) {
        this.table = table;
        return this;
    }
}