package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SectionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public Section data;
    public SectionResponse withData(Section data) {
        this.data = data;
        return this;
    }
}