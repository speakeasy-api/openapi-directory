package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StartUserImportJobResponse
 * Represents the response from the server to the request to start the user import job.
**/
public class StartUserImportJobResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserImportJob")
    public UserImportJobType userImportJob;
    public StartUserImportJobResponse withUserImportJob(UserImportJobType userImportJob) {
        this.userImportJob = userImportJob;
        return this;
    }
}