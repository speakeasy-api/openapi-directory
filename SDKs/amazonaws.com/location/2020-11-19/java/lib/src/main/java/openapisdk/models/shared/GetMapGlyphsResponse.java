package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetMapGlyphsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Blob")
    public String blob;
    public GetMapGlyphsResponse withBlob(String blob) {
        this.blob = blob;
        return this;
    }
}