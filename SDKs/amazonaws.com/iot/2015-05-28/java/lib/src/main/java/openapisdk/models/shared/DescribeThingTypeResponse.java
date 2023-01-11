package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeThingTypeResponse
 * The output for the DescribeThingType operation.
**/
public class DescribeThingTypeResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingTypeArn")
    public String thingTypeArn;
    public DescribeThingTypeResponse withThingTypeArn(String thingTypeArn) {
        this.thingTypeArn = thingTypeArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingTypeId")
    public String thingTypeId;
    public DescribeThingTypeResponse withThingTypeId(String thingTypeId) {
        this.thingTypeId = thingTypeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingTypeMetadata")
    public ThingTypeMetadata thingTypeMetadata;
    public DescribeThingTypeResponse withThingTypeMetadata(ThingTypeMetadata thingTypeMetadata) {
        this.thingTypeMetadata = thingTypeMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingTypeName")
    public String thingTypeName;
    public DescribeThingTypeResponse withThingTypeName(String thingTypeName) {
        this.thingTypeName = thingTypeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingTypeProperties")
    public ThingTypeProperties thingTypeProperties;
    public DescribeThingTypeResponse withThingTypeProperties(ThingTypeProperties thingTypeProperties) {
        this.thingTypeProperties = thingTypeProperties;
        return this;
    }
}