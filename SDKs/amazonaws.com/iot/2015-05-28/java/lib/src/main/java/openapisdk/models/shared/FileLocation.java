package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FileLocation
 * The location of the OTA update.
**/
public class FileLocation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("s3Location")
    public S3Location s3Location;
    public FileLocation withS3Location(S3Location s3Location) {
        this.s3Location = s3Location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stream")
    public Stream stream;
    public FileLocation withStream(Stream stream) {
        this.stream = stream;
        return this;
    }
}