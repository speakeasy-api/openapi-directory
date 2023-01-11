package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetControlPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=controlId")
    public String controlId;
    public GetControlPathParams withControlId(String controlId) {
        this.controlId = controlId;
        return this;
    }
}