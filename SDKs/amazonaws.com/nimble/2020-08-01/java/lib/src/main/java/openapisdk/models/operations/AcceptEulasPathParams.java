package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AcceptEulasPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=studioId")
    public String studioId;
    public AcceptEulasPathParams withStudioId(String studioId) {
        this.studioId = studioId;
        return this;
    }
}