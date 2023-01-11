package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateCsvClassifierRequest
 * Specifies a custom CSV classifier to be updated.
**/
public class UpdateCsvClassifierRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllowSingleColumn")
    public Boolean allowSingleColumn;
    public UpdateCsvClassifierRequest withAllowSingleColumn(Boolean allowSingleColumn) {
        this.allowSingleColumn = allowSingleColumn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContainsHeader")
    public CsvHeaderOptionEnum containsHeader;
    public UpdateCsvClassifierRequest withContainsHeader(CsvHeaderOptionEnum containsHeader) {
        this.containsHeader = containsHeader;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Delimiter")
    public String delimiter;
    public UpdateCsvClassifierRequest withDelimiter(String delimiter) {
        this.delimiter = delimiter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DisableValueTrimming")
    public Boolean disableValueTrimming;
    public UpdateCsvClassifierRequest withDisableValueTrimming(Boolean disableValueTrimming) {
        this.disableValueTrimming = disableValueTrimming;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Header")
    public String[] header;
    public UpdateCsvClassifierRequest withHeader(String[] header) {
        this.header = header;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public UpdateCsvClassifierRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("QuoteSymbol")
    public String quoteSymbol;
    public UpdateCsvClassifierRequest withQuoteSymbol(String quoteSymbol) {
        this.quoteSymbol = quoteSymbol;
        return this;
    }
}