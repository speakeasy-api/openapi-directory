package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WhoisQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public WhoisFormatEnum format;
    public WhoisQueryParams withFormat(WhoisFormatEnum format) {
        this.format = format;
        return this;
    }
}