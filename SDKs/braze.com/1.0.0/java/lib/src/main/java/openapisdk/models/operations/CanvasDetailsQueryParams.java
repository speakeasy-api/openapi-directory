package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CanvasDetailsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=canvas_id")
    public String canvasId;
    public CanvasDetailsQueryParams withCanvasId(String canvasId) {
        this.canvasId = canvasId;
        return this;
    }
}