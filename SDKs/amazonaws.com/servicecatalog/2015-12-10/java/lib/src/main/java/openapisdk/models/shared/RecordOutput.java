package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RecordOutput
 * The output for the product created as the result of a request. For example, the output for a CloudFormation-backed product that creates an S3 bucket would include the S3 bucket URL.
**/
public class RecordOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public RecordOutput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OutputKey")
    public String outputKey;
    public RecordOutput withOutputKey(String outputKey) {
        this.outputKey = outputKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OutputValue")
    public String outputValue;
    public RecordOutput withOutputValue(String outputValue) {
        this.outputValue = outputValue;
        return this;
    }
}