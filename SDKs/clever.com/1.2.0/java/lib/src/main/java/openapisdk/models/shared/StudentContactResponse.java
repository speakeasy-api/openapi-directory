package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StudentContactResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public StudentContact data;
    public StudentContactResponse withData(StudentContact data) {
        this.data = data;
        return this;
    }
}