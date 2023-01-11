package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StudentsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public StudentResponse[] data;
    public StudentsResponse withData(StudentResponse[] data) {
        this.data = data;
        return this;
    }
}