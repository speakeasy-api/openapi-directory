package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Stream
 * Describes a group of files that can be streamed.
**/
public class Stream {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileId")
    public Long fileId;
    public Stream withFileId(Long fileId) {
        this.fileId = fileId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("streamId")
    public String streamId;
    public Stream withStreamId(String streamId) {
        this.streamId = streamId;
        return this;
    }
}