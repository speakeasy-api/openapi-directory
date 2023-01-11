package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DocumentSimilarityRequestBody {
    @SpeakeasyMetadata("form:name=api_key")
    public String apiKey;
    public DocumentSimilarityRequestBody withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("form:name=copy")
    public String copy;
    public DocumentSimilarityRequestBody withCopy(String copy) {
        this.copy = copy;
        return this;
    }
    @SpeakeasyMetadata("form:name=original")
    public String original;
    public DocumentSimilarityRequestBody withOriginal(String original) {
        this.original = original;
        return this;
    }
}