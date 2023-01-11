package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDetectorModelVersionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=detectorModelName")
    public String detectorModelName;
    public ListDetectorModelVersionsPathParams withDetectorModelName(String detectorModelName) {
        this.detectorModelName = detectorModelName;
        return this;
    }
}