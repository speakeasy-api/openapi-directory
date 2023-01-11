package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetClassificationsId200ApplicationVndApiPlusJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.Classification data;
    public GetClassificationsId200ApplicationVndApiPlusJson withData(openapisdk.models.shared.Classification data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public openapisdk.models.shared.ResourceLink links;
    public GetClassificationsId200ApplicationVndApiPlusJson withLinks(openapisdk.models.shared.ResourceLink links) {
        this.links = links;
        return this;
    }
}