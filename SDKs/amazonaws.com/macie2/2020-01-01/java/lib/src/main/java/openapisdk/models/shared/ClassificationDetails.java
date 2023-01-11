package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ClassificationDetails
 * Provides information about a sensitive data finding, including the classification job that produced the finding.
**/
public class ClassificationDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detailedResultsLocation")
    public String detailedResultsLocation;
    public ClassificationDetails withDetailedResultsLocation(String detailedResultsLocation) {
        this.detailedResultsLocation = detailedResultsLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobArn")
    public String jobArn;
    public ClassificationDetails withJobArn(String jobArn) {
        this.jobArn = jobArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobId")
    public String jobId;
    public ClassificationDetails withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result")
    public ClassificationResult result;
    public ClassificationDetails withResult(ClassificationResult result) {
        this.result = result;
        return this;
    }
}