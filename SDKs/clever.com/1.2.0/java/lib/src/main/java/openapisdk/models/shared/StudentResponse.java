package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StudentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public Student data;
    public StudentResponse withData(Student data) {
        this.data = data;
        return this;
    }
}