package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FileDownloadQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=action")
    public String action;
    public FileDownloadQueryParams withAction(String action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=preview_size")
    public String previewSize;
    public FileDownloadQueryParams withPreviewSize(String previewSize) {
        this.previewSize = previewSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=with_previews")
    public Boolean withPreviews;
    public FileDownloadQueryParams withWithPreviews(Boolean withPreviews) {
        this.withPreviews = withPreviews;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=with_priority_color")
    public Boolean withPriorityColor;
    public FileDownloadQueryParams withWithPriorityColor(Boolean withPriorityColor) {
        this.withPriorityColor = withPriorityColor;
        return this;
    }
}