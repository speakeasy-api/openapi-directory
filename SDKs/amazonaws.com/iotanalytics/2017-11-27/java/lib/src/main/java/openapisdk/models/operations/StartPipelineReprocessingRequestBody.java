package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class StartPipelineReprocessingRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelMessages")
    public StartPipelineReprocessingRequestBodyChannelMessages channelMessages;
    public StartPipelineReprocessingRequestBody withChannelMessages(StartPipelineReprocessingRequestBodyChannelMessages channelMessages) {
        this.channelMessages = channelMessages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("endTime")
    public OffsetDateTime endTime;
    public StartPipelineReprocessingRequestBody withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("startTime")
    public OffsetDateTime startTime;
    public StartPipelineReprocessingRequestBody withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
}