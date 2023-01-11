package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StartPipelineReprocessingRequestBodyChannelMessages
 * Specifies one or more sets of channel messages.
**/
public class StartPipelineReprocessingRequestBodyChannelMessages {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("s3Paths")
    public String[] s3Paths;
    public StartPipelineReprocessingRequestBodyChannelMessages withS3Paths(String[] s3Paths) {
        this.s3Paths = s3Paths;
        return this;
    }
}