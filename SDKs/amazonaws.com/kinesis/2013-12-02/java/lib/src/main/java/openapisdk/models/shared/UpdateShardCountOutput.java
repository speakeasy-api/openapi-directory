package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateShardCountOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CurrentShardCount")
    public Long currentShardCount;
    public UpdateShardCountOutput withCurrentShardCount(Long currentShardCount) {
        this.currentShardCount = currentShardCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StreamName")
    public String streamName;
    public UpdateShardCountOutput withStreamName(String streamName) {
        this.streamName = streamName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TargetShardCount")
    public Long targetShardCount;
    public UpdateShardCountOutput withTargetShardCount(Long targetShardCount) {
        this.targetShardCount = targetShardCount;
        return this;
    }
}