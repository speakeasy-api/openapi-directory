package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateDynamicThingGroupResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("indexName")
    public String indexName;
    public CreateDynamicThingGroupResponse withIndexName(String indexName) {
        this.indexName = indexName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryString")
    public String queryString;
    public CreateDynamicThingGroupResponse withQueryString(String queryString) {
        this.queryString = queryString;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryVersion")
    public String queryVersion;
    public CreateDynamicThingGroupResponse withQueryVersion(String queryVersion) {
        this.queryVersion = queryVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingGroupArn")
    public String thingGroupArn;
    public CreateDynamicThingGroupResponse withThingGroupArn(String thingGroupArn) {
        this.thingGroupArn = thingGroupArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingGroupId")
    public String thingGroupId;
    public CreateDynamicThingGroupResponse withThingGroupId(String thingGroupId) {
        this.thingGroupId = thingGroupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingGroupName")
    public String thingGroupName;
    public CreateDynamicThingGroupResponse withThingGroupName(String thingGroupName) {
        this.thingGroupName = thingGroupName;
        return this;
    }
}