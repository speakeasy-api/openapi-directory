package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetMappingResponse {
    @JsonProperty("Mapping")
    public MappingEntry[] mapping;
    public GetMappingResponse withMapping(MappingEntry[] mapping) {
        this.mapping = mapping;
        return this;
    }
}