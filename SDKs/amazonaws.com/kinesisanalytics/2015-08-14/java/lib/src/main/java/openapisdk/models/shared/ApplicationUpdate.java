package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApplicationUpdate
 * Describes updates to apply to an existing Amazon Kinesis Analytics application.
**/
public class ApplicationUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApplicationCodeUpdate")
    public String applicationCodeUpdate;
    public ApplicationUpdate withApplicationCodeUpdate(String applicationCodeUpdate) {
        this.applicationCodeUpdate = applicationCodeUpdate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CloudWatchLoggingOptionUpdates")
    public CloudWatchLoggingOptionUpdate[] cloudWatchLoggingOptionUpdates;
    public ApplicationUpdate withCloudWatchLoggingOptionUpdates(CloudWatchLoggingOptionUpdate[] cloudWatchLoggingOptionUpdates) {
        this.cloudWatchLoggingOptionUpdates = cloudWatchLoggingOptionUpdates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InputUpdates")
    public InputUpdate[] inputUpdates;
    public ApplicationUpdate withInputUpdates(InputUpdate[] inputUpdates) {
        this.inputUpdates = inputUpdates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OutputUpdates")
    public OutputUpdate[] outputUpdates;
    public ApplicationUpdate withOutputUpdates(OutputUpdate[] outputUpdates) {
        this.outputUpdates = outputUpdates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReferenceDataSourceUpdates")
    public ReferenceDataSourceUpdate[] referenceDataSourceUpdates;
    public ApplicationUpdate withReferenceDataSourceUpdates(ReferenceDataSourceUpdate[] referenceDataSourceUpdates) {
        this.referenceDataSourceUpdates = referenceDataSourceUpdates;
        return this;
    }
}