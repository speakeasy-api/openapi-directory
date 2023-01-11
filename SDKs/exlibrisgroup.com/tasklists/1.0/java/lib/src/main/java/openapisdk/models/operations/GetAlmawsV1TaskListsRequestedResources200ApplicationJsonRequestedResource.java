package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResource
 * Requested resource to be picked from the shelf.
**/
public class GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocation location;
    public GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResource withLocation(GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocation location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request")
    public GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequest[] request;
    public GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResource withRequest(GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequest[] request) {
        this.request = request;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_metadata")
    public GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceResourceMetadata resourceMetadata;
    public GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResource withResourceMetadata(GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceResourceMetadata resourceMetadata) {
        this.resourceMetadata = resourceMetadata;
        return this;
    }
}