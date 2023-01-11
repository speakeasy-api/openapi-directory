package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeThingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=thingName")
    public String thingName;
    public DescribeThingPathParams withThingName(String thingName) {
        this.thingName = thingName;
        return this;
    }
}