package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationLibrary
 * Library of the requested resource. See [Get libraries API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4Dp4I8TKv6CAxBlD4LyRaVE=/37088dc9-c685-4641-bc7f-60b5ca7cabed).
**/
public class GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationLibrary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("desc")
    public String desc;
    public GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationLibrary withDesc(String desc) {
        this.desc = desc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationLibrary withValue(String value) {
        this.value = value;
        return this;
    }
}