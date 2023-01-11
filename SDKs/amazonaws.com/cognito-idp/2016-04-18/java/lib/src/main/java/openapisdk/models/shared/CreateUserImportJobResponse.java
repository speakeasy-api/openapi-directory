package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateUserImportJobResponse
 * Represents the response from the server to the request to create the user import job.
**/
public class CreateUserImportJobResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserImportJob")
    public UserImportJobType userImportJob;
    public CreateUserImportJobResponse withUserImportJob(UserImportJobType userImportJob) {
        this.userImportJob = userImportJob;
        return this;
    }
}