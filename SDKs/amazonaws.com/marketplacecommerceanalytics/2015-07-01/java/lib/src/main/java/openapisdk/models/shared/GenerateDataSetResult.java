package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GenerateDataSetResult
 * Container for the result of the GenerateDataSet operation.
**/
public class GenerateDataSetResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSetRequestId")
    public String dataSetRequestId;
    public GenerateDataSetResult withDataSetRequestId(String dataSetRequestId) {
        this.dataSetRequestId = dataSetRequestId;
        return this;
    }
}