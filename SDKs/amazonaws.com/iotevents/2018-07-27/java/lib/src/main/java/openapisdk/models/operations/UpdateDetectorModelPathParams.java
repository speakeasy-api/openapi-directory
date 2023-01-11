package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDetectorModelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=detectorModelName")
    public String detectorModelName;
    public UpdateDetectorModelPathParams withDetectorModelName(String detectorModelName) {
        this.detectorModelName = detectorModelName;
        return this;
    }
}