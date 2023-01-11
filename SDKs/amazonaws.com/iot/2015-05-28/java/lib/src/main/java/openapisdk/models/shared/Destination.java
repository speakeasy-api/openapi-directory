package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Destination
 * Describes the location of the updated firmware.
**/
public class Destination {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("s3Destination")
    public S3Destination s3Destination;
    public Destination withS3Destination(S3Destination s3Destination) {
        this.s3Destination = s3Destination;
        return this;
    }
}