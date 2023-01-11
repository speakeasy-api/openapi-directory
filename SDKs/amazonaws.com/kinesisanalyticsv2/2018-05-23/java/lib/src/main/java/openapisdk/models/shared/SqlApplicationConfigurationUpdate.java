package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SqlApplicationConfigurationUpdate
 * Describes updates to the input streams, destination streams, and reference data sources for a SQL-based Kinesis Data Analytics application.
**/
public class SqlApplicationConfigurationUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InputUpdates")
    public InputUpdate[] inputUpdates;
    public SqlApplicationConfigurationUpdate withInputUpdates(InputUpdate[] inputUpdates) {
        this.inputUpdates = inputUpdates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OutputUpdates")
    public OutputUpdate[] outputUpdates;
    public SqlApplicationConfigurationUpdate withOutputUpdates(OutputUpdate[] outputUpdates) {
        this.outputUpdates = outputUpdates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReferenceDataSourceUpdates")
    public ReferenceDataSourceUpdate[] referenceDataSourceUpdates;
    public SqlApplicationConfigurationUpdate withReferenceDataSourceUpdates(ReferenceDataSourceUpdate[] referenceDataSourceUpdates) {
        this.referenceDataSourceUpdates = referenceDataSourceUpdates;
        return this;
    }
}