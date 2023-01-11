package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Layer
 * An <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>.
**/
public class Layer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Arn")
    public String arn;
    public Layer withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CodeSize")
    public Long codeSize;
    public Layer withCodeSize(Long codeSize) {
        this.codeSize = codeSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SigningJobArn")
    public String signingJobArn;
    public Layer withSigningJobArn(String signingJobArn) {
        this.signingJobArn = signingJobArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SigningProfileVersionArn")
    public String signingProfileVersionArn;
    public Layer withSigningProfileVersionArn(String signingProfileVersionArn) {
        this.signingProfileVersionArn = signingProfileVersionArn;
        return this;
    }
}