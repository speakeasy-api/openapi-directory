package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutPushDeviceDetailsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public openapisdk.models.shared.ResponseFormatEnum format;
    public PutPushDeviceDetailsQueryParams withFormat(openapisdk.models.shared.ResponseFormatEnum format) {
        this.format = format;
        return this;
    }
}