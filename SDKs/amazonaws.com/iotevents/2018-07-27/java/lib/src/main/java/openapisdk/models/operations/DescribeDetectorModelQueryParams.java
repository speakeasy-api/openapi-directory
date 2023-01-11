package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeDetectorModelQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=version")
    public String version;
    public DescribeDetectorModelQueryParams withVersion(String version) {
        this.version = version;
        return this;
    }
}