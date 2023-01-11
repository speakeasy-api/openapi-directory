package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListContactsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Filter")
    public ListContactsRequestBodyFilter filter;
    public ListContactsRequestBody withFilter(ListContactsRequestBodyFilter filter) {
        this.filter = filter;
        return this;
    }
}