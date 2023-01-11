package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestRequestSubType
 * The sub type of the request.
**/
public class GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestRequestSubType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("desc")
    public String desc;
    public GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestRequestSubType withDesc(String desc) {
        this.desc = desc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestRequestSubType withValue(String value) {
        this.value = value;
        return this;
    }
}