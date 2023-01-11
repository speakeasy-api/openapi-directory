package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Occurrences
 * The detected occurrences of sensitive data.
**/
public class Occurrences {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Cells")
    public Cell[] cells;
    public Occurrences withCells(Cell[] cells) {
        this.cells = cells;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LineRanges")
    public Range[] lineRanges;
    public Occurrences withLineRanges(Range[] lineRanges) {
        this.lineRanges = lineRanges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OffsetRanges")
    public Range[] offsetRanges;
    public Occurrences withOffsetRanges(Range[] offsetRanges) {
        this.offsetRanges = offsetRanges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Pages")
    public Page[] pages;
    public Occurrences withPages(Page[] pages) {
        this.pages = pages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Records")
    public Record[] records;
    public Occurrences withRecords(Record[] records) {
        this.records = records;
        return this;
    }
}