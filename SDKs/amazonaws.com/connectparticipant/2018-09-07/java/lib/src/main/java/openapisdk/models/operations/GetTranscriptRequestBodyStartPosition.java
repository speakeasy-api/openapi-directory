package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetTranscriptRequestBodyStartPosition
 * A filtering option for where to start. For example, if you sent 100 messages, start with message 50. 
**/
public class GetTranscriptRequestBodyStartPosition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AbsoluteTime")
    public String absoluteTime;
    public GetTranscriptRequestBodyStartPosition withAbsoluteTime(String absoluteTime) {
        this.absoluteTime = absoluteTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public GetTranscriptRequestBodyStartPosition withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MostRecent")
    public Long mostRecent;
    public GetTranscriptRequestBodyStartPosition withMostRecent(Long mostRecent) {
        this.mostRecent = mostRecent;
        return this;
    }
}