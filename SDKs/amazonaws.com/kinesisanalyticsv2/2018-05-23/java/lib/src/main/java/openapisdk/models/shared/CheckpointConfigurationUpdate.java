package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CheckpointConfigurationUpdate
 * Describes updates to the checkpointing parameters for a Flink-based Kinesis Data Analytics application.
**/
public class CheckpointConfigurationUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CheckpointIntervalUpdate")
    public Long checkpointIntervalUpdate;
    public CheckpointConfigurationUpdate withCheckpointIntervalUpdate(Long checkpointIntervalUpdate) {
        this.checkpointIntervalUpdate = checkpointIntervalUpdate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CheckpointingEnabledUpdate")
    public Boolean checkpointingEnabledUpdate;
    public CheckpointConfigurationUpdate withCheckpointingEnabledUpdate(Boolean checkpointingEnabledUpdate) {
        this.checkpointingEnabledUpdate = checkpointingEnabledUpdate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConfigurationTypeUpdate")
    public ConfigurationTypeEnum configurationTypeUpdate;
    public CheckpointConfigurationUpdate withConfigurationTypeUpdate(ConfigurationTypeEnum configurationTypeUpdate) {
        this.configurationTypeUpdate = configurationTypeUpdate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MinPauseBetweenCheckpointsUpdate")
    public Long minPauseBetweenCheckpointsUpdate;
    public CheckpointConfigurationUpdate withMinPauseBetweenCheckpointsUpdate(Long minPauseBetweenCheckpointsUpdate) {
        this.minPauseBetweenCheckpointsUpdate = minPauseBetweenCheckpointsUpdate;
        return this;
    }
}