package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeThingTypePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=thingTypeName")
    public String thingTypeName;
    public DescribeThingTypePathParams withThingTypeName(String thingTypeName) {
        this.thingTypeName = thingTypeName;
        return this;
    }
}