package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteCrawlerRequest {
    @JsonProperty("Name")
    public String name;
    public DeleteCrawlerRequest withName(String name) {
        this.name = name;
        return this;
    }
}