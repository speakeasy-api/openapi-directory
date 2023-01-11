package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FileActionMetadataQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=preview_size")
    public String previewSize;
    public FileActionMetadataQueryParams withPreviewSize(String previewSize) {
        this.previewSize = previewSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=with_previews")
    public Boolean withPreviews;
    public FileActionMetadataQueryParams withWithPreviews(Boolean withPreviews) {
        this.withPreviews = withPreviews;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=with_priority_color")
    public Boolean withPriorityColor;
    public FileActionMetadataQueryParams withWithPriorityColor(Boolean withPriorityColor) {
        this.withPriorityColor = withPriorityColor;
        return this;
    }
}