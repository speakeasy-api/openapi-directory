package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDetectorModelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=detectorModelName")
    public String detectorModelName;
    public DeleteDetectorModelPathParams withDetectorModelName(String detectorModelName) {
        this.detectorModelName = detectorModelName;
        return this;
    }
}