package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DiscoverInputSchemaResponse
 * <p/>
**/
public class DiscoverInputSchemaResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InputSchema")
    public SourceSchema inputSchema;
    public DiscoverInputSchemaResponse withInputSchema(SourceSchema inputSchema) {
        this.inputSchema = inputSchema;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ParsedInputRecords")
    public String[][] parsedInputRecords;
    public DiscoverInputSchemaResponse withParsedInputRecords(String[][] parsedInputRecords) {
        this.parsedInputRecords = parsedInputRecords;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProcessedInputRecords")
    public String[] processedInputRecords;
    public DiscoverInputSchemaResponse withProcessedInputRecords(String[] processedInputRecords) {
        this.processedInputRecords = processedInputRecords;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RawInputRecords")
    public String[] rawInputRecords;
    public DiscoverInputSchemaResponse withRawInputRecords(String[] rawInputRecords) {
        this.rawInputRecords = rawInputRecords;
        return this;
    }
}