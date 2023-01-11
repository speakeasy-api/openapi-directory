package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateShardCountInput {
    @JsonProperty("ScalingType")
    public ScalingTypeEnum scalingType;
    public UpdateShardCountInput withScalingType(ScalingTypeEnum scalingType) {
        this.scalingType = scalingType;
        return this;
    }
    @JsonProperty("StreamName")
    public String streamName;
    public UpdateShardCountInput withStreamName(String streamName) {
        this.streamName = streamName;
        return this;
    }
    @JsonProperty("TargetShardCount")
    public Long targetShardCount;
    public UpdateShardCountInput withTargetShardCount(Long targetShardCount) {
        this.targetShardCount = targetShardCount;
        return this;
    }
}