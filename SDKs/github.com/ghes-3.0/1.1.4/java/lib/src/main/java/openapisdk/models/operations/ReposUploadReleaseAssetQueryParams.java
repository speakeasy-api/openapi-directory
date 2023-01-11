package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposUploadReleaseAssetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=label")
    public String label;
    public ReposUploadReleaseAssetQueryParams withLabel(String label) {
        this.label = label;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public ReposUploadReleaseAssetQueryParams withName(String name) {
        this.name = name;
        return this;
    }
}