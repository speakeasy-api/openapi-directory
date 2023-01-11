package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetCrawlerRequest {
    @JsonProperty("Name")
    public String name;
    public GetCrawlerRequest withName(String name) {
        this.name = name;
        return this;
    }
}