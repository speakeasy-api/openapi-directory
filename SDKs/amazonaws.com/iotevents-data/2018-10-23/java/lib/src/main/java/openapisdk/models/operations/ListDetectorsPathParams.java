package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDetectorsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=detectorModelName")
    public String detectorModelName;
    public ListDetectorsPathParams withDetectorModelName(String detectorModelName) {
        this.detectorModelName = detectorModelName;
        return this;
    }
}