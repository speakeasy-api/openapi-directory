package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetClassificationInclusions200ApplicationVndApiPlusJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.ClassificationInclusion[] data;
    public GetClassificationInclusions200ApplicationVndApiPlusJson withData(openapisdk.models.shared.ClassificationInclusion[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public openapisdk.models.shared.Links links;
    public GetClassificationInclusions200ApplicationVndApiPlusJson withLinks(openapisdk.models.shared.Links links) {
        this.links = links;
        return this;
    }
}