package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePushDeviceDetailsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public openapisdk.models.shared.ResponseFormatEnum format;
    public UpdatePushDeviceDetailsQueryParams withFormat(openapisdk.models.shared.ResponseFormatEnum format) {
        this.format = format;
        return this;
    }
}