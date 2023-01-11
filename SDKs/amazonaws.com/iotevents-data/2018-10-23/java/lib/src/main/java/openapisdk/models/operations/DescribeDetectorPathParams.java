package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeDetectorPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=detectorModelName")
    public String detectorModelName;
    public DescribeDetectorPathParams withDetectorModelName(String detectorModelName) {
        this.detectorModelName = detectorModelName;
        return this;
    }
}