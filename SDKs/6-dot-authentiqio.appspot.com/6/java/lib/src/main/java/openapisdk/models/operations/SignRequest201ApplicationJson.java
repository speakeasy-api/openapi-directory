package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SignRequest201ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("job")
    public String job;
    public SignRequest201ApplicationJson withJob(String job) {
        this.job = job;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public SignRequest201ApplicationJson withStatus(String status) {
        this.status = status;
        return this;
    }
}