package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeAlarmQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=keyValue")
    public String keyValue;
    public DescribeAlarmQueryParams withKeyValue(String keyValue) {
        this.keyValue = keyValue;
        return this;
    }
}