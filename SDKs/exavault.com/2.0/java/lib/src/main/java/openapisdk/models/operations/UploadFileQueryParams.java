package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadFileQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=allowOverwrite")
    public Boolean allowOverwrite;
    public UploadFileQueryParams withAllowOverwrite(Boolean allowOverwrite) {
        this.allowOverwrite = allowOverwrite;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fileSize")
    public Long fileSize;
    public UploadFileQueryParams withFileSize(Long fileSize) {
        this.fileSize = fileSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=path")
    public String path;
    public UploadFileQueryParams withPath(String path) {
        this.path = path;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=resume")
    public Boolean resume;
    public UploadFileQueryParams withResume(Boolean resume) {
        this.resume = resume;
        return this;
    }
}