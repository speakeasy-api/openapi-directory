package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Report
 * The complex type that defines that defines the report.
**/
public class Report {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensionMetadata")
    public Metadata[] dimensionMetadata;
    public Report withDimensionMetadata(Metadata[] dimensionMetadata) {
        this.dimensionMetadata = dimensionMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public String endDate;
    public Report withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("header")
    public Header header;
    public Report withHeader(Header header) {
        this.header = header;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastUpdatedDate")
    public String lastUpdatedDate;
    public Report withLastUpdatedDate(String lastUpdatedDate) {
        this.lastUpdatedDate = lastUpdatedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("records")
    public Record[] records;
    public Report withRecords(Record[] records) {
        this.records = records;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public String startDate;
    public Report withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warnings")
    public Error[] warnings;
    public Report withWarnings(Error[] warnings) {
        this.warnings = warnings;
        return this;
    }
}