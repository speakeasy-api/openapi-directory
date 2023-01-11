package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetCelebrityInfoRequest {
    @JsonProperty("Id")
    public String id;
    public GetCelebrityInfoRequest withId(String id) {
        this.id = id;
        return this;
    }
}