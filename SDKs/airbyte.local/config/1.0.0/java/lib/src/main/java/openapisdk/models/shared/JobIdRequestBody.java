package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class JobIdRequestBody {
    @JsonProperty("id")
    public Long id;
    public JobIdRequestBody withId(Long id) {
        this.id = id;
        return this;
    }
}