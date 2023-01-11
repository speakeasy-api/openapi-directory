package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateThingRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributePayload")
    public UpdateThingRequestBodyAttributePayload attributePayload;
    public UpdateThingRequestBody withAttributePayload(UpdateThingRequestBodyAttributePayload attributePayload) {
        this.attributePayload = attributePayload;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expectedVersion")
    public Long expectedVersion;
    public UpdateThingRequestBody withExpectedVersion(Long expectedVersion) {
        this.expectedVersion = expectedVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("removeThingType")
    public Boolean removeThingType;
    public UpdateThingRequestBody withRemoveThingType(Boolean removeThingType) {
        this.removeThingType = removeThingType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingTypeName")
    public String thingTypeName;
    public UpdateThingRequestBody withThingTypeName(String thingTypeName) {
        this.thingTypeName = thingTypeName;
        return this;
    }
}