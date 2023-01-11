package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Statistics
 * Provides processing statistics for a classification job.
**/
public class Statistics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approximateNumberOfObjectsToProcess")
    public Double approximateNumberOfObjectsToProcess;
    public Statistics withApproximateNumberOfObjectsToProcess(Double approximateNumberOfObjectsToProcess) {
        this.approximateNumberOfObjectsToProcess = approximateNumberOfObjectsToProcess;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numberOfRuns")
    public Double numberOfRuns;
    public Statistics withNumberOfRuns(Double numberOfRuns) {
        this.numberOfRuns = numberOfRuns;
        return this;
    }
}