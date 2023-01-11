package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestRequester
 * A description of the requester.
**/
public class GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestRequester {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("desc")
    public String desc;
    public GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestRequester withDesc(String desc) {
        this.desc = desc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestRequester withValue(String value) {
        this.value = value;
        return this;
    }
}