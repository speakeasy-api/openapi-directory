package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CsvMappingParameters
 * <p>Provides additional mapping information when the record format uses delimiters, such as CSV. For example, the following sample records use CSV format, where the records use the <i>'\n'</i> as the row delimiter and a comma (",") as the column delimiter: </p> <p> <code>"name1", "address1"</code> </p> <p> <code>"name2", "address2"</code> </p>
**/
public class CsvMappingParameters {
    @JsonProperty("RecordColumnDelimiter")
    public String recordColumnDelimiter;
    public CsvMappingParameters withRecordColumnDelimiter(String recordColumnDelimiter) {
        this.recordColumnDelimiter = recordColumnDelimiter;
        return this;
    }
    @JsonProperty("RecordRowDelimiter")
    public String recordRowDelimiter;
    public CsvMappingParameters withRecordRowDelimiter(String recordRowDelimiter) {
        this.recordRowDelimiter = recordRowDelimiter;
        return this;
    }
}