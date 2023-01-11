package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateJobTemplateResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobTemplateArn")
    public String jobTemplateArn;
    public CreateJobTemplateResponse withJobTemplateArn(String jobTemplateArn) {
        this.jobTemplateArn = jobTemplateArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobTemplateId")
    public String jobTemplateId;
    public CreateJobTemplateResponse withJobTemplateId(String jobTemplateId) {
        this.jobTemplateId = jobTemplateId;
        return this;
    }
}