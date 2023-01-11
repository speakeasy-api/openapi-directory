package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StudentContactsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public StudentContactResponse[] data;
    public StudentContactsResponse withData(StudentContactResponse[] data) {
        this.data = data;
        return this;
    }
}