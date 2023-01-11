package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InferenceOutputConfiguration
 *  Specifies configuration information for the output results from for the inference, including KMS key ID and output S3 location. 
**/
public class InferenceOutputConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KmsKeyId")
    public String kmsKeyId;
    public InferenceOutputConfiguration withKmsKeyId(String kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
    @JsonProperty("S3OutputConfiguration")
    public InferenceS3OutputConfiguration s3OutputConfiguration;
    public InferenceOutputConfiguration withS3OutputConfiguration(InferenceS3OutputConfiguration s3OutputConfiguration) {
        this.s3OutputConfiguration = s3OutputConfiguration;
        return this;
    }
}