package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TypeaheadForWorkspace200ApplicationJson
 * A generic list of objects, such as those returned by the typeahead search endpoint.
**/
public class TypeaheadForWorkspace200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.AsanaNamedResource[] data;
    public TypeaheadForWorkspace200ApplicationJson withData(openapisdk.models.shared.AsanaNamedResource[] data) {
        this.data = data;
        return this;
    }
}