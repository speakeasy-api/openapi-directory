package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateArticleCategoriesAddPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=article_id")
    public Long articleId;
    public PrivateArticleCategoriesAddPathParams withArticleId(Long articleId) {
        this.articleId = articleId;
        return this;
    }
}