package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateDynamicThingGroupRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expectedVersion")
    public Long expectedVersion;
    public UpdateDynamicThingGroupRequestBody withExpectedVersion(Long expectedVersion) {
        this.expectedVersion = expectedVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("indexName")
    public String indexName;
    public UpdateDynamicThingGroupRequestBody withIndexName(String indexName) {
        this.indexName = indexName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryString")
    public String queryString;
    public UpdateDynamicThingGroupRequestBody withQueryString(String queryString) {
        this.queryString = queryString;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryVersion")
    public String queryVersion;
    public UpdateDynamicThingGroupRequestBody withQueryVersion(String queryVersion) {
        this.queryVersion = queryVersion;
        return this;
    }
    @JsonProperty("thingGroupProperties")
    public UpdateDynamicThingGroupRequestBodyThingGroupProperties thingGroupProperties;
    public UpdateDynamicThingGroupRequestBody withThingGroupProperties(UpdateDynamicThingGroupRequestBodyThingGroupProperties thingGroupProperties) {
        this.thingGroupProperties = thingGroupProperties;
        return this;
    }
}