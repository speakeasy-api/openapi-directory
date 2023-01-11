package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StopCrawlerRequest {
    @JsonProperty("Name")
    public String name;
    public StopCrawlerRequest withName(String name) {
        this.name = name;
        return this;
    }
}