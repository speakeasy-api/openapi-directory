package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeUserImportJobResponse
 * Represents the response from the server to the request to describe the user import job.
**/
public class DescribeUserImportJobResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserImportJob")
    public UserImportJobType userImportJob;
    public DescribeUserImportJobResponse withUserImportJob(UserImportJobType userImportJob) {
        this.userImportJob = userImportJob;
        return this;
    }
}