package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Source
 * Contains the location of a validation script.
**/
public class Source {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("s3Location")
    public S3Location s3Location;
    public Source withS3Location(S3Location s3Location) {
        this.s3Location = s3Location;
        return this;
    }
}