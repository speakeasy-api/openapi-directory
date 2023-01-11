package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ArticleDetailsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=article_id")
    public Long articleId;
    public ArticleDetailsPathParams withArticleId(Long articleId) {
        this.articleId = articleId;
        return this;
    }
}