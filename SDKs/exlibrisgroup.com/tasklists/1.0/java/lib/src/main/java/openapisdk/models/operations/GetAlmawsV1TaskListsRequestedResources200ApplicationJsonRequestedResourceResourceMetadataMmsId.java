package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceResourceMetadataMmsId
 * The MMS id of the resource. See [GET BIB API](https://developers.exlibrisgroup.com/alma/apis/bibs/GET/gwPcGly021om4RTvtjbPleCklCGxeYAf3JPdiJpJhUA=/af2fb69d-64f4-42bc-bb05-d8a0ae56936e).
**/
public class GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceResourceMetadataMmsId {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public String link;
    public GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceResourceMetadataMmsId withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceResourceMetadataMmsId withValue(String value) {
        this.value = value;
        return this;
    }
}