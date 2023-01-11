package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateThingRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributePayload")
    public CreateThingRequestBodyAttributePayload attributePayload;
    public CreateThingRequestBody withAttributePayload(CreateThingRequestBodyAttributePayload attributePayload) {
        this.attributePayload = attributePayload;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingGroupName")
    public String billingGroupName;
    public CreateThingRequestBody withBillingGroupName(String billingGroupName) {
        this.billingGroupName = billingGroupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingTypeName")
    public String thingTypeName;
    public CreateThingRequestBody withThingTypeName(String thingTypeName) {
        this.thingTypeName = thingTypeName;
        return this;
    }
}