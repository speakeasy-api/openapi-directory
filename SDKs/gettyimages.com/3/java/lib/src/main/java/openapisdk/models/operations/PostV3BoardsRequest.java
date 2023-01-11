package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV3BoardsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BoardInfo request;
    public PostV3BoardsRequest withRequest(openapisdk.models.shared.BoardInfo request) {
        this.request = request;
        return this;
    }
}