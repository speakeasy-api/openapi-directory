package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeObjectPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Path")
    public String path;
    public DescribeObjectPathParams withPath(String path) {
        this.path = path;
        return this;
    }
}