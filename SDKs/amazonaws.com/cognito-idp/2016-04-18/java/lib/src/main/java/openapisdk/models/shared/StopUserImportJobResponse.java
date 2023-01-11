package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StopUserImportJobResponse
 * Represents the response from the server to the request to stop the user import job.
**/
public class StopUserImportJobResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserImportJob")
    public UserImportJobType userImportJob;
    public StopUserImportJobResponse withUserImportJob(UserImportJobType userImportJob) {
        this.userImportJob = userImportJob;
        return this;
    }
}