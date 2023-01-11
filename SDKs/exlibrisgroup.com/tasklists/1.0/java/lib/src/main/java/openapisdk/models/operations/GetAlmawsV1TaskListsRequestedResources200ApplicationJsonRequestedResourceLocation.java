package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocation
 * Location of the requested resource.
**/
public class GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("call_number")
    public String callNumber;
    public GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocation withCallNumber(String callNumber) {
        this.callNumber = callNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("copy")
    public GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationCopy[] copy;
    public GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocation withCopy(GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationCopy[] copy) {
        this.copy = copy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("holding_id")
    public GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationHoldingId holdingId;
    public GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocation withHoldingId(GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationHoldingId holdingId) {
        this.holdingId = holdingId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("library")
    public GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationLibrary library;
    public GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocation withLibrary(GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationLibrary library) {
        this.library = library;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shelving_location")
    public String shelvingLocation;
    public GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocation withShelvingLocation(String shelvingLocation) {
        this.shelvingLocation = shelvingLocation;
        return this;
    }
}