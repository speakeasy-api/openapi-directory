package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetFavoritesForUser200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.AsanaNamedResource[] data;
    public GetFavoritesForUser200ApplicationJson withData(openapisdk.models.shared.AsanaNamedResource[] data) {
        this.data = data;
        return this;
    }
}