package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StreamFile
 * Represents a file to stream.
**/
public class StreamFile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileId")
    public Long fileId;
    public StreamFile withFileId(Long fileId) {
        this.fileId = fileId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("s3Location")
    public S3Location s3Location;
    public StreamFile withS3Location(S3Location s3Location) {
        this.s3Location = s3Location;
        return this;
    }
}