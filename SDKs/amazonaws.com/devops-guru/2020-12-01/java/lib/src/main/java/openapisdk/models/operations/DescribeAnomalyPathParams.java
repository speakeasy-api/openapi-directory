package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeAnomalyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Id")
    public String id;
    public DescribeAnomalyPathParams withId(String id) {
        this.id = id;
        return this;
    }
}