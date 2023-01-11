package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateArticleConfidentialityDetailsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=article_id")
    public Long articleId;
    public PrivateArticleConfidentialityDetailsPathParams withArticleId(Long articleId) {
        this.articleId = articleId;
        return this;
    }
}