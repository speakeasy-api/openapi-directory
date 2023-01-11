package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateArticleDetailsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=article_id")
    public Long articleId;
    public PrivateArticleDetailsPathParams withArticleId(Long articleId) {
        this.articleId = articleId;
        return this;
    }
}