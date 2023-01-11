package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegisterPushDeviceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public openapisdk.models.shared.ResponseFormatEnum format;
    public RegisterPushDeviceQueryParams withFormat(openapisdk.models.shared.ResponseFormatEnum format) {
        this.format = format;
        return this;
    }
}