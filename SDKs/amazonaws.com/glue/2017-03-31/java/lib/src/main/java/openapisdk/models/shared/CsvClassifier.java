package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * CsvClassifier
 * A classifier for custom <code>CSV</code> content.
**/
public class CsvClassifier {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllowSingleColumn")
    public Boolean allowSingleColumn;
    public CsvClassifier withAllowSingleColumn(Boolean allowSingleColumn) {
        this.allowSingleColumn = allowSingleColumn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContainsHeader")
    public CsvHeaderOptionEnum containsHeader;
    public CsvClassifier withContainsHeader(CsvHeaderOptionEnum containsHeader) {
        this.containsHeader = containsHeader;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreationTime")
    public OffsetDateTime creationTime;
    public CsvClassifier withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Delimiter")
    public String delimiter;
    public CsvClassifier withDelimiter(String delimiter) {
        this.delimiter = delimiter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DisableValueTrimming")
    public Boolean disableValueTrimming;
    public CsvClassifier withDisableValueTrimming(Boolean disableValueTrimming) {
        this.disableValueTrimming = disableValueTrimming;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Header")
    public String[] header;
    public CsvClassifier withHeader(String[] header) {
        this.header = header;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastUpdated")
    public OffsetDateTime lastUpdated;
    public CsvClassifier withLastUpdated(OffsetDateTime lastUpdated) {
        this.lastUpdated = lastUpdated;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public CsvClassifier withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("QuoteSymbol")
    public String quoteSymbol;
    public CsvClassifier withQuoteSymbol(String quoteSymbol) {
        this.quoteSymbol = quoteSymbol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Version")
    public Long version;
    public CsvClassifier withVersion(Long version) {
        this.version = version;
        return this;
    }
}