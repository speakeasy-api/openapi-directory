package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateImageBuilderStreamingUrlRequest {
    @JsonProperty("Name")
    public String name;
    public CreateImageBuilderStreamingUrlRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Validity")
    public Long validity;
    public CreateImageBuilderStreamingUrlRequest withValidity(Long validity) {
        this.validity = validity;
        return this;
    }
}