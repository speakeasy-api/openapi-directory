package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetImages200ApplicationVndApiPlusJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.Image[] data;
    public GetImages200ApplicationVndApiPlusJson withData(openapisdk.models.shared.Image[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public openapisdk.models.shared.Links links;
    public GetImages200ApplicationVndApiPlusJson withLinks(openapisdk.models.shared.Links links) {
        this.links = links;
        return this;
    }
}