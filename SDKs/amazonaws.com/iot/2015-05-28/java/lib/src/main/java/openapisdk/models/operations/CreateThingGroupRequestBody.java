package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateThingGroupRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parentGroupName")
    public String parentGroupName;
    public CreateThingGroupRequestBody withParentGroupName(String parentGroupName) {
        this.parentGroupName = parentGroupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public openapisdk.models.shared.Tag[] tags;
    public CreateThingGroupRequestBody withTags(openapisdk.models.shared.Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingGroupProperties")
    public CreateThingGroupRequestBodyThingGroupProperties thingGroupProperties;
    public CreateThingGroupRequestBody withThingGroupProperties(CreateThingGroupRequestBodyThingGroupProperties thingGroupProperties) {
        this.thingGroupProperties = thingGroupProperties;
        return this;
    }
}