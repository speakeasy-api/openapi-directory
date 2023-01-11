package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OutputLocation
 * Contains information about the location where the select job results are stored.
**/
public class OutputLocation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3")
    public S3Location s3;
    public OutputLocation withS3(S3Location s3) {
        this.s3 = s3;
        return this;
    }
}