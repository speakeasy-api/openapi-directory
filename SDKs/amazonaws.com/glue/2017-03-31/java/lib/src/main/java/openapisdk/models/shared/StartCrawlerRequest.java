package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StartCrawlerRequest {
    @JsonProperty("Name")
    public String name;
    public StartCrawlerRequest withName(String name) {
        this.name = name;
        return this;
    }
}