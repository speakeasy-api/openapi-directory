package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DownloadQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=downloadArchiveName")
    public String downloadArchiveName;
    public DownloadQueryParams withDownloadArchiveName(String downloadArchiveName) {
        this.downloadArchiveName = downloadArchiveName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=resources[]")
    public String[] resources;
    public DownloadQueryParams withResources(String[] resources) {
        this.resources = resources;
        return this;
    }
}