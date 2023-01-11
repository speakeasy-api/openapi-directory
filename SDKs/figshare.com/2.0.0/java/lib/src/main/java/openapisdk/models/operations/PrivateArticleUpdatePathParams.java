package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateArticleUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=article_id")
    public Long articleId;
    public PrivateArticleUpdatePathParams withArticleId(Long articleId) {
        this.articleId = articleId;
        return this;
    }
}