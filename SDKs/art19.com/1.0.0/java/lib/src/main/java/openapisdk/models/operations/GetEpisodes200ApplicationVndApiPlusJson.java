package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetEpisodes200ApplicationVndApiPlusJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.Episode[] data;
    public GetEpisodes200ApplicationVndApiPlusJson withData(openapisdk.models.shared.Episode[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public openapisdk.models.shared.Links links;
    public GetEpisodes200ApplicationVndApiPlusJson withLinks(openapisdk.models.shared.Links links) {
        this.links = links;
        return this;
    }
}