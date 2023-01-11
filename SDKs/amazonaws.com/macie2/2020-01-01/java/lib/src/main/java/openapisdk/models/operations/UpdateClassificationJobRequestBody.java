package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateClassificationJobRequestBody {
    @JsonProperty("jobStatus")
    public UpdateClassificationJobRequestBodyJobStatusEnum jobStatus;
    public UpdateClassificationJobRequestBody withJobStatus(UpdateClassificationJobRequestBodyJobStatusEnum jobStatus) {
        this.jobStatus = jobStatus;
        return this;
    }
}