package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TeachersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public TeacherResponse[] data;
    public TeachersResponse withData(TeacherResponse[] data) {
        this.data = data;
        return this;
    }
}