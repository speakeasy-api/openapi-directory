package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CsvOutput
 * Contains information about the comma-separated value (CSV) file that the job results are stored in.
**/
public class CsvOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FieldDelimiter")
    public String fieldDelimiter;
    public CsvOutput withFieldDelimiter(String fieldDelimiter) {
        this.fieldDelimiter = fieldDelimiter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("QuoteCharacter")
    public String quoteCharacter;
    public CsvOutput withQuoteCharacter(String quoteCharacter) {
        this.quoteCharacter = quoteCharacter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("QuoteEscapeCharacter")
    public String quoteEscapeCharacter;
    public CsvOutput withQuoteEscapeCharacter(String quoteEscapeCharacter) {
        this.quoteEscapeCharacter = quoteEscapeCharacter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("QuoteFields")
    public QuoteFieldsEnum quoteFields;
    public CsvOutput withQuoteFields(QuoteFieldsEnum quoteFields) {
        this.quoteFields = quoteFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RecordDelimiter")
    public String recordDelimiter;
    public CsvOutput withRecordDelimiter(String recordDelimiter) {
        this.recordDelimiter = recordDelimiter;
        return this;
    }
}