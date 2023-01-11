package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public DescribeUpdatePathParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=updateId")
    public String updateId;
    public DescribeUpdatePathParams withUpdateId(String updateId) {
        this.updateId = updateId;
        return this;
    }
}