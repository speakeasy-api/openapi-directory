package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetSampleDataResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HeaderValues")
    public String[] headerValues;
    public GetSampleDataResponse withHeaderValues(String[] headerValues) {
        this.headerValues = headerValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SampleRows")
    public String[][] sampleRows;
    public GetSampleDataResponse withSampleRows(String[][] sampleRows) {
        this.sampleRows = sampleRows;
        return this;
    }
}