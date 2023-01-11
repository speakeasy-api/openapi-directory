package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateDynamicThingGroupRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("indexName")
    public String indexName;
    public CreateDynamicThingGroupRequestBody withIndexName(String indexName) {
        this.indexName = indexName;
        return this;
    }
    @JsonProperty("queryString")
    public String queryString;
    public CreateDynamicThingGroupRequestBody withQueryString(String queryString) {
        this.queryString = queryString;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryVersion")
    public String queryVersion;
    public CreateDynamicThingGroupRequestBody withQueryVersion(String queryVersion) {
        this.queryVersion = queryVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public openapisdk.models.shared.Tag[] tags;
    public CreateDynamicThingGroupRequestBody withTags(openapisdk.models.shared.Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingGroupProperties")
    public CreateDynamicThingGroupRequestBodyThingGroupProperties thingGroupProperties;
    public CreateDynamicThingGroupRequestBody withThingGroupProperties(CreateDynamicThingGroupRequestBodyThingGroupProperties thingGroupProperties) {
        this.thingGroupProperties = thingGroupProperties;
        return this;
    }
}