package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SsmOutput
 * Contains the location of validation output.
**/
public class SsmOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("s3Location")
    public S3Location s3Location;
    public SsmOutput withS3Location(S3Location s3Location) {
        this.s3Location = s3Location;
        return this;
    }
}