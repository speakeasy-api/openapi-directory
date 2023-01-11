package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetMappingRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Location")
    public Location location;
    public GetMappingRequest withLocation(Location location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Sinks")
    public CatalogEntry[] sinks;
    public GetMappingRequest withSinks(CatalogEntry[] sinks) {
        this.sinks = sinks;
        return this;
    }
    @JsonProperty("Source")
    public CatalogEntry source;
    public GetMappingRequest withSource(CatalogEntry source) {
        this.source = source;
        return this;
    }
}