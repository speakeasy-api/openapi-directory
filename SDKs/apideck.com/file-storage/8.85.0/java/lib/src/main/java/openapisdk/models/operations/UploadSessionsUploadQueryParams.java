package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadSessionsUploadQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=part_number")
    public Double partNumber;
    public UploadSessionsUploadQueryParams withPartNumber(Double partNumber) {
        this.partNumber = partNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public UploadSessionsUploadQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}