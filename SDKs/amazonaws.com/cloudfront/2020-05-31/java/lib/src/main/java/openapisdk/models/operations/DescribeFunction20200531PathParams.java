package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeFunction20200531PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Name")
    public String name;
    public DescribeFunction20200531PathParams withName(String name) {
        this.name = name;
        return this;
    }
}