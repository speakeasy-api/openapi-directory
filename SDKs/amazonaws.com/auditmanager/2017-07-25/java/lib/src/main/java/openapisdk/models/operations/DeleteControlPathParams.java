package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteControlPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=controlId")
    public String controlId;
    public DeleteControlPathParams withControlId(String controlId) {
        this.controlId = controlId;
        return this;
    }
}