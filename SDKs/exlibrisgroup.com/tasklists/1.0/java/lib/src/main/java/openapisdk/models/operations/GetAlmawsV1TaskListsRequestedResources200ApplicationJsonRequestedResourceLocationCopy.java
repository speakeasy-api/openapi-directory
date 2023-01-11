package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationCopy
 * Specific copy of resource in a specific location.
**/
public class GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationCopy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alternative_call_number")
    public String alternativeCallNumber;
    public GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationCopy withAlternativeCallNumber(String alternativeCallNumber) {
        this.alternativeCallNumber = alternativeCallNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("barcode")
    public String barcode;
    public GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationCopy withBarcode(String barcode) {
        this.barcode = barcode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("base_status")
    public GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationCopyBaseStatus baseStatus;
    public GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationCopy withBaseStatus(GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationCopyBaseStatus baseStatus) {
        this.baseStatus = baseStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public String link;
    public GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationCopy withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pid")
    public String pid;
    public GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationCopy withPid(String pid) {
        this.pid = pid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storage_location_id")
    public String storageLocationId;
    public GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationCopy withStorageLocationId(String storageLocationId) {
        this.storageLocationId = storageLocationId;
        return this;
    }
}