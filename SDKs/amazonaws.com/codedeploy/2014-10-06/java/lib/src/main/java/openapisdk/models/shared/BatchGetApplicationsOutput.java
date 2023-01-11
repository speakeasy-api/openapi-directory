package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchGetApplicationsOutput
 * Represents the output of a <code>BatchGetApplications</code> operation.
**/
public class BatchGetApplicationsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applicationsInfo")
    public ApplicationInfo[] applicationsInfo;
    public BatchGetApplicationsOutput withApplicationsInfo(ApplicationInfo[] applicationsInfo) {
        this.applicationsInfo = applicationsInfo;
        return this;
    }
}