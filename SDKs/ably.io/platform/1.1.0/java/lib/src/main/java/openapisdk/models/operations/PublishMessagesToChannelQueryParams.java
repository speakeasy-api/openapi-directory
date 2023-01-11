package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PublishMessagesToChannelQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public openapisdk.models.shared.ResponseFormatEnum format;
    public PublishMessagesToChannelQueryParams withFormat(openapisdk.models.shared.ResponseFormatEnum format) {
        this.format = format;
        return this;
    }
}