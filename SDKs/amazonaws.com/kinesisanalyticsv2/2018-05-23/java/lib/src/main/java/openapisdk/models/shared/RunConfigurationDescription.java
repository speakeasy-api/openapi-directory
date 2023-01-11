package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RunConfigurationDescription
 * Describes the starting properties for a Kinesis Data Analytics application.
**/
public class RunConfigurationDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApplicationRestoreConfigurationDescription")
    public ApplicationRestoreConfiguration applicationRestoreConfigurationDescription;
    public RunConfigurationDescription withApplicationRestoreConfigurationDescription(ApplicationRestoreConfiguration applicationRestoreConfigurationDescription) {
        this.applicationRestoreConfigurationDescription = applicationRestoreConfigurationDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FlinkRunConfigurationDescription")
    public FlinkRunConfiguration flinkRunConfigurationDescription;
    public RunConfigurationDescription withFlinkRunConfigurationDescription(FlinkRunConfiguration flinkRunConfigurationDescription) {
        this.flinkRunConfigurationDescription = flinkRunConfigurationDescription;
        return this;
    }
}