package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateControlPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=controlId")
    public String controlId;
    public UpdateControlPathParams withControlId(String controlId) {
        this.controlId = controlId;
        return this;
    }
}