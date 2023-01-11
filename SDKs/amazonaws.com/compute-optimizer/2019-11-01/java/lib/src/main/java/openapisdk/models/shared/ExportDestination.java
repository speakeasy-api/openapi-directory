package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExportDestination
 * Describes the destination of the recommendations export and metadata files.
**/
public class ExportDestination {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("s3")
    public S3Destination s3;
    public ExportDestination withS3(S3Destination s3) {
        this.s3 = s3;
        return this;
    }
}