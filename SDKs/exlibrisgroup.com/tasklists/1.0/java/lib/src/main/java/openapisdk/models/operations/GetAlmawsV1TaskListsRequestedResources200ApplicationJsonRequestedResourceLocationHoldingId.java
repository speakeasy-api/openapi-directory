package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationHoldingId
 * Holding pid, a unique holding id that the resource is associated with.
**/
public class GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationHoldingId {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public String link;
    public GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationHoldingId withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationHoldingId withValue(String value) {
        this.value = value;
        return this;
    }
}