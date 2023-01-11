package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateArticleConfidentialityDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=article_id")
    public Long articleId;
    public PrivateArticleConfidentialityDeletePathParams withArticleId(Long articleId) {
        this.articleId = articleId;
        return this;
    }
}