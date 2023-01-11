package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OutputDataConfig
 * <p>Provides configuration parameters for the output of topic detection jobs.</p> <p/>
**/
public class OutputDataConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KmsKeyId")
    public String kmsKeyId;
    public OutputDataConfig withKmsKeyId(String kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
    @JsonProperty("S3Uri")
    public String s3Uri;
    public OutputDataConfig withS3Uri(String s3Uri) {
        this.s3Uri = s3Uri;
        return this;
    }
}