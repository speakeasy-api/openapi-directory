package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CheckpointConfiguration
 * Describes an application's checkpointing configuration. Checkpointing is the process of persisting application state for fault tolerance. For more information, see <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/concepts/programming-model.html#checkpoints-for-fault-tolerance"> Checkpoints for Fault Tolerance</a> in the <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/">Apache Flink Documentation</a>.
**/
public class CheckpointConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CheckpointInterval")
    public Long checkpointInterval;
    public CheckpointConfiguration withCheckpointInterval(Long checkpointInterval) {
        this.checkpointInterval = checkpointInterval;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CheckpointingEnabled")
    public Boolean checkpointingEnabled;
    public CheckpointConfiguration withCheckpointingEnabled(Boolean checkpointingEnabled) {
        this.checkpointingEnabled = checkpointingEnabled;
        return this;
    }
    @JsonProperty("ConfigurationType")
    public ConfigurationTypeEnum configurationType;
    public CheckpointConfiguration withConfigurationType(ConfigurationTypeEnum configurationType) {
        this.configurationType = configurationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MinPauseBetweenCheckpoints")
    public Long minPauseBetweenCheckpoints;
    public CheckpointConfiguration withMinPauseBetweenCheckpoints(Long minPauseBetweenCheckpoints) {
        this.minPauseBetweenCheckpoints = minPauseBetweenCheckpoints;
        return this;
    }
}