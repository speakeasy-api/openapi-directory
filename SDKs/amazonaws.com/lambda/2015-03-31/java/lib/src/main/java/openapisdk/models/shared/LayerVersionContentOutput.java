package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LayerVersionContentOutput
 * Details about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>.
**/
public class LayerVersionContentOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CodeSha256")
    public String codeSha256;
    public LayerVersionContentOutput withCodeSha256(String codeSha256) {
        this.codeSha256 = codeSha256;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CodeSize")
    public Long codeSize;
    public LayerVersionContentOutput withCodeSize(Long codeSize) {
        this.codeSize = codeSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Location")
    public String location;
    public LayerVersionContentOutput withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SigningJobArn")
    public String signingJobArn;
    public LayerVersionContentOutput withSigningJobArn(String signingJobArn) {
        this.signingJobArn = signingJobArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SigningProfileVersionArn")
    public String signingProfileVersionArn;
    public LayerVersionContentOutput withSigningProfileVersionArn(String signingProfileVersionArn) {
        this.signingProfileVersionArn = signingProfileVersionArn;
        return this;
    }
}