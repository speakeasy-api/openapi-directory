package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeThingResponse
 * The output from the DescribeThing operation.
**/
public class DescribeThingResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public java.util.Map<String, String> attributes;
    public DescribeThingResponse withAttributes(java.util.Map<String, String> attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingGroupName")
    public String billingGroupName;
    public DescribeThingResponse withBillingGroupName(String billingGroupName) {
        this.billingGroupName = billingGroupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultClientId")
    public String defaultClientId;
    public DescribeThingResponse withDefaultClientId(String defaultClientId) {
        this.defaultClientId = defaultClientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingArn")
    public String thingArn;
    public DescribeThingResponse withThingArn(String thingArn) {
        this.thingArn = thingArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingId")
    public String thingId;
    public DescribeThingResponse withThingId(String thingId) {
        this.thingId = thingId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingName")
    public String thingName;
    public DescribeThingResponse withThingName(String thingName) {
        this.thingName = thingName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingTypeName")
    public String thingTypeName;
    public DescribeThingResponse withThingTypeName(String thingTypeName) {
        this.thingTypeName = thingTypeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public Long version;
    public DescribeThingResponse withVersion(Long version) {
        this.version = version;
        return this;
    }
}