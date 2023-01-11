package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InputFileReadCsvConfiguration
 * The CSV file description
**/
public class InputFileReadCsvConfiguration {
    @JsonProperty("csvSeparator")
    public String csvSeparator;
    public InputFileReadCsvConfiguration withCsvSeparator(String csvSeparator) {
        this.csvSeparator = csvSeparator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("csvTextQualifier")
    public String csvTextQualifier;
    public InputFileReadCsvConfiguration withCsvTextQualifier(String csvTextQualifier) {
        this.csvTextQualifier = csvTextQualifier;
        return this;
    }
    @JsonProperty("hasHeaderRecord")
    public Boolean hasHeaderRecord;
    public InputFileReadCsvConfiguration withHasHeaderRecord(Boolean hasHeaderRecord) {
        this.hasHeaderRecord = hasHeaderRecord;
        return this;
    }
    @JsonProperty("ignoreHeaderRecord")
    public Boolean ignoreHeaderRecord;
    public InputFileReadCsvConfiguration withIgnoreHeaderRecord(Boolean ignoreHeaderRecord) {
        this.ignoreHeaderRecord = ignoreHeaderRecord;
        return this;
    }
}