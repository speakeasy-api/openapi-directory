package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AvailabilityResults {
    @JsonProperty("results")
    public ArchivedResult[] results;
    public AvailabilityResults withResults(ArchivedResult[] results) {
        this.results = results;
        return this;
    }
}