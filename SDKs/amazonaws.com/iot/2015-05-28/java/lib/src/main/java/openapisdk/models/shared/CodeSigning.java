package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CodeSigning
 * Describes the method to use when code signing a file.
**/
public class CodeSigning {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("awsSignerJobId")
    public String awsSignerJobId;
    public CodeSigning withAwsSignerJobId(String awsSignerJobId) {
        this.awsSignerJobId = awsSignerJobId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customCodeSigning")
    public CustomCodeSigning customCodeSigning;
    public CodeSigning withCustomCodeSigning(CustomCodeSigning customCodeSigning) {
        this.customCodeSigning = customCodeSigning;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startSigningJobParameter")
    public StartSigningJobParameter startSigningJobParameter;
    public CodeSigning withStartSigningJobParameter(StartSigningJobParameter startSigningJobParameter) {
        this.startSigningJobParameter = startSigningJobParameter;
        return this;
    }
}