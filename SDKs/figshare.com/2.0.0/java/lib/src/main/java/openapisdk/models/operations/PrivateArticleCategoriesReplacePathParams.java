package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateArticleCategoriesReplacePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=article_id")
    public Long articleId;
    public PrivateArticleCategoriesReplacePathParams withArticleId(Long articleId) {
        this.articleId = articleId;
        return this;
    }
}