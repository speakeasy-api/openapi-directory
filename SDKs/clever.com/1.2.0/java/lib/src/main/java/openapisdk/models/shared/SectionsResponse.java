package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SectionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public SectionResponse[] data;
    public SectionsResponse withData(SectionResponse[] data) {
        this.data = data;
        return this;
    }
}