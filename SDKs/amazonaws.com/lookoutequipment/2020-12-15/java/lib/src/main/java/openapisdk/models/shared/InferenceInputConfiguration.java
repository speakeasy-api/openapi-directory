package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InferenceInputConfiguration
 * Specifies configuration information for the input data for the inference, including S3 location of input data.. 
**/
public class InferenceInputConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InferenceInputNameConfiguration")
    public InferenceInputNameConfiguration inferenceInputNameConfiguration;
    public InferenceInputConfiguration withInferenceInputNameConfiguration(InferenceInputNameConfiguration inferenceInputNameConfiguration) {
        this.inferenceInputNameConfiguration = inferenceInputNameConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InputTimeZoneOffset")
    public String inputTimeZoneOffset;
    public InferenceInputConfiguration withInputTimeZoneOffset(String inputTimeZoneOffset) {
        this.inputTimeZoneOffset = inputTimeZoneOffset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3InputConfiguration")
    public InferenceS3InputConfiguration s3InputConfiguration;
    public InferenceInputConfiguration withS3InputConfiguration(InferenceS3InputConfiguration s3InputConfiguration) {
        this.s3InputConfiguration = s3InputConfiguration;
        return this;
    }
}