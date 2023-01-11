package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeDetectorQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=keyValue")
    public String keyValue;
    public DescribeDetectorQueryParams withKeyValue(String keyValue) {
        this.keyValue = keyValue;
        return this;
    }
}