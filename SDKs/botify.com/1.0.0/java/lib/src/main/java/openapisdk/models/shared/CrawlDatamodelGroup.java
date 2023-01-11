package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CrawlDatamodelGroup {
    @JsonProperty("id")
    public String id;
    public CrawlDatamodelGroup withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CrawlDatamodelGroup withName(String name) {
        this.name = name;
        return this;
    }
}