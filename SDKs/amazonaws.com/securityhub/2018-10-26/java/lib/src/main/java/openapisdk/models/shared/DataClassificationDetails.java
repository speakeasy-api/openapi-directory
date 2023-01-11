package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DataClassificationDetails
 * Provides details about sensitive data that was detected on a resource.
**/
public class DataClassificationDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DetailedResultsLocation")
    public String detailedResultsLocation;
    public DataClassificationDetails withDetailedResultsLocation(String detailedResultsLocation) {
        this.detailedResultsLocation = detailedResultsLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Result")
    public ClassificationResult result;
    public DataClassificationDetails withResult(ClassificationResult result) {
        this.result = result;
        return this;
    }
}