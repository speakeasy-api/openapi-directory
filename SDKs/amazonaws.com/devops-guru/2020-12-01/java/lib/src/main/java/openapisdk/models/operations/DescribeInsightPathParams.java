package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeInsightPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Id")
    public String id;
    public DescribeInsightPathParams withId(String id) {
        this.id = id;
        return this;
    }
}