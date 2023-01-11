package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ArticlesSearchRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ArticleSearch request;
    public ArticlesSearchRequest withRequest(openapisdk.models.shared.ArticleSearch request) {
        this.request = request;
        return this;
    }
}