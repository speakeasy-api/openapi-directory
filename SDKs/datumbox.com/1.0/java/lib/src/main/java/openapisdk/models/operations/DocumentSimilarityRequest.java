package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DocumentSimilarityRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public DocumentSimilarityRequestBody request;
    public DocumentSimilarityRequest withRequest(DocumentSimilarityRequestBody request) {
        this.request = request;
        return this;
    }
}