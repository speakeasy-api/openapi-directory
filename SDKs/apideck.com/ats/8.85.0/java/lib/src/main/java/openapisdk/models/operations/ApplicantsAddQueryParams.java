package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApplicantsAddQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public ApplicantsAddQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}