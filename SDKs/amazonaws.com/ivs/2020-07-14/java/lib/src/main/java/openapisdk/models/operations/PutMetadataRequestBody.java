package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutMetadataRequestBody {
    @JsonProperty("channelArn")
    public String channelArn;
    public PutMetadataRequestBody withChannelArn(String channelArn) {
        this.channelArn = channelArn;
        return this;
    }
    @JsonProperty("metadata")
    public String metadata;
    public PutMetadataRequestBody withMetadata(String metadata) {
        this.metadata = metadata;
        return this;
    }
}