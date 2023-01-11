package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMetadataOfAllChannelsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=by")
    public GetMetadataOfAllChannelsByEnum by;
    public GetMetadataOfAllChannelsQueryParams withBy(GetMetadataOfAllChannelsByEnum by) {
        this.by = by;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public openapisdk.models.shared.ResponseFormatEnum format;
    public GetMetadataOfAllChannelsQueryParams withFormat(openapisdk.models.shared.ResponseFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetMetadataOfAllChannelsQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prefix")
    public String prefix;
    public GetMetadataOfAllChannelsQueryParams withPrefix(String prefix) {
        this.prefix = prefix;
        return this;
    }
}