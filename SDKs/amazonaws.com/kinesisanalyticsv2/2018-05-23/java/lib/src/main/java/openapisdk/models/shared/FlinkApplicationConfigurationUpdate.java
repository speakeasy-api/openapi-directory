package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FlinkApplicationConfigurationUpdate
 * Describes updates to the configuration parameters for a Flink-based Kinesis Data Analytics application.
**/
public class FlinkApplicationConfigurationUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CheckpointConfigurationUpdate")
    public CheckpointConfigurationUpdate checkpointConfigurationUpdate;
    public FlinkApplicationConfigurationUpdate withCheckpointConfigurationUpdate(CheckpointConfigurationUpdate checkpointConfigurationUpdate) {
        this.checkpointConfigurationUpdate = checkpointConfigurationUpdate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MonitoringConfigurationUpdate")
    public MonitoringConfigurationUpdate monitoringConfigurationUpdate;
    public FlinkApplicationConfigurationUpdate withMonitoringConfigurationUpdate(MonitoringConfigurationUpdate monitoringConfigurationUpdate) {
        this.monitoringConfigurationUpdate = monitoringConfigurationUpdate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ParallelismConfigurationUpdate")
    public ParallelismConfigurationUpdate parallelismConfigurationUpdate;
    public FlinkApplicationConfigurationUpdate withParallelismConfigurationUpdate(ParallelismConfigurationUpdate parallelismConfigurationUpdate) {
        this.parallelismConfigurationUpdate = parallelismConfigurationUpdate;
        return this;
    }
}