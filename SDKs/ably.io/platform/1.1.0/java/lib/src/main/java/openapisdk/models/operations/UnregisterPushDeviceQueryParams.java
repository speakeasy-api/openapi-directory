package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UnregisterPushDeviceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public openapisdk.models.shared.ResponseFormatEnum format;
    public UnregisterPushDeviceQueryParams withFormat(openapisdk.models.shared.ResponseFormatEnum format) {
        this.format = format;
        return this;
    }
}