package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CsvInput
 * Contains information about the comma-separated value (CSV) file to select from.
**/
public class CsvInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Comments")
    public String comments;
    public CsvInput withComments(String comments) {
        this.comments = comments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FieldDelimiter")
    public String fieldDelimiter;
    public CsvInput withFieldDelimiter(String fieldDelimiter) {
        this.fieldDelimiter = fieldDelimiter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FileHeaderInfo")
    public FileHeaderInfoEnum fileHeaderInfo;
    public CsvInput withFileHeaderInfo(FileHeaderInfoEnum fileHeaderInfo) {
        this.fileHeaderInfo = fileHeaderInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("QuoteCharacter")
    public String quoteCharacter;
    public CsvInput withQuoteCharacter(String quoteCharacter) {
        this.quoteCharacter = quoteCharacter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("QuoteEscapeCharacter")
    public String quoteEscapeCharacter;
    public CsvInput withQuoteEscapeCharacter(String quoteEscapeCharacter) {
        this.quoteEscapeCharacter = quoteEscapeCharacter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RecordDelimiter")
    public String recordDelimiter;
    public CsvInput withRecordDelimiter(String recordDelimiter) {
        this.recordDelimiter = recordDelimiter;
        return this;
    }
}