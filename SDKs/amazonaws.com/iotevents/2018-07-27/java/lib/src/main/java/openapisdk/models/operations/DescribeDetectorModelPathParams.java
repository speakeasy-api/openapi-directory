package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeDetectorModelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=detectorModelName")
    public String detectorModelName;
    public DescribeDetectorModelPathParams withDetectorModelName(String detectorModelName) {
        this.detectorModelName = detectorModelName;
        return this;
    }
}