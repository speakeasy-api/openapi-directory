package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ParallelismConfiguration
 * Describes parameters for how a Flink-based Kinesis Data Analytics application executes multiple tasks simultaneously. For more information about parallelism, see <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/dev/parallel.html">Parallel Execution</a> in the <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/">Apache Flink Documentation</a>.
**/
public class ParallelismConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutoScalingEnabled")
    public Boolean autoScalingEnabled;
    public ParallelismConfiguration withAutoScalingEnabled(Boolean autoScalingEnabled) {
        this.autoScalingEnabled = autoScalingEnabled;
        return this;
    }
    @JsonProperty("ConfigurationType")
    public ConfigurationTypeEnum configurationType;
    public ParallelismConfiguration withConfigurationType(ConfigurationTypeEnum configurationType) {
        this.configurationType = configurationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Parallelism")
    public Long parallelism;
    public ParallelismConfiguration withParallelism(Long parallelism) {
        this.parallelism = parallelism;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ParallelismPerKPU")
    public Long parallelismPerKPU;
    public ParallelismConfiguration withParallelismPerKpu(Long parallelismPerKPU) {
        this.parallelismPerKPU = parallelismPerKPU;
        return this;
    }
}