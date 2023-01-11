package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateArticleConfidentialityUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=article_id")
    public Long articleId;
    public PrivateArticleConfidentialityUpdatePathParams withArticleId(Long articleId) {
        this.articleId = articleId;
        return this;
    }
}