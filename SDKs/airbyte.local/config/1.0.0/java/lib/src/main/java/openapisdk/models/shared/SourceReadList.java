package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SourceReadList {
    @JsonProperty("sources")
    public SourceRead[] sources;
    public SourceReadList withSources(SourceRead[] sources) {
        this.sources = sources;
        return this;
    }
}