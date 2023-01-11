package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InputFileLocation
 * Specifies the location for the file being copied. Only applicable for the Copy type of workflow steps.
**/
public class InputFileLocation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EfsFileLocation")
    public EfsFileLocation efsFileLocation;
    public InputFileLocation withEfsFileLocation(EfsFileLocation efsFileLocation) {
        this.efsFileLocation = efsFileLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3FileLocation")
    public S3InputFileLocation s3FileLocation;
    public InputFileLocation withS3FileLocation(S3InputFileLocation s3FileLocation) {
        this.s3FileLocation = s3FileLocation;
        return this;
    }
}