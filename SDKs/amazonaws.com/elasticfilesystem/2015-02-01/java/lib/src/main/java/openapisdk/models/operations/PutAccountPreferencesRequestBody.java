package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutAccountPreferencesRequestBody {
    @JsonProperty("ResourceIdType")
    public PutAccountPreferencesRequestBodyResourceIdTypeEnum resourceIdType;
    public PutAccountPreferencesRequestBody withResourceIdType(PutAccountPreferencesRequestBodyResourceIdTypeEnum resourceIdType) {
        this.resourceIdType = resourceIdType;
        return this;
    }
}