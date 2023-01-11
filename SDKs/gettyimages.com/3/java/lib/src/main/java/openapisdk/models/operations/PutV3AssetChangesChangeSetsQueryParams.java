package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutV3AssetChangesChangeSetsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=batch_size")
    public Integer batchSize;
    public PutV3AssetChangesChangeSetsQueryParams withBatchSize(Integer batchSize) {
        this.batchSize = batchSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=channel_id")
    public Integer channelId;
    public PutV3AssetChangesChangeSetsQueryParams withChannelId(Integer channelId) {
        this.channelId = channelId;
        return this;
    }
}