package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CheckRunCheckSuite {
    @JsonProperty("id")
    public Long id;
    public CheckRunCheckSuite withId(Long id) {
        this.id = id;
        return this;
    }
}