package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTypeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public GetTypeFormatEnum format;
    public GetTypeQueryParams withFormat(GetTypeFormatEnum format) {
        this.format = format;
        return this;
    }
}