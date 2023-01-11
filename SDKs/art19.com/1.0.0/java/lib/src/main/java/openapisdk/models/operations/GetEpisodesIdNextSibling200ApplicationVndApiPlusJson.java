package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetEpisodesIdNextSibling200ApplicationVndApiPlusJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.Episode data;
    public GetEpisodesIdNextSibling200ApplicationVndApiPlusJson withData(openapisdk.models.shared.Episode data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public openapisdk.models.shared.ResourceLink links;
    public GetEpisodesIdNextSibling200ApplicationVndApiPlusJson withLinks(openapisdk.models.shared.ResourceLink links) {
        this.links = links;
        return this;
    }
}