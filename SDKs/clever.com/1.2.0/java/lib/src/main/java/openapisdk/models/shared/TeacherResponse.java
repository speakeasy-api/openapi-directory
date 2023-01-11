package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TeacherResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public Teacher data;
    public TeacherResponse withData(Teacher data) {
        this.data = data;
        return this;
    }
}