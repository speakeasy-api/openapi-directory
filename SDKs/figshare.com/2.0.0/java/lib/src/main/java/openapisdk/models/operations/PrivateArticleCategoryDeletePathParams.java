package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateArticleCategoryDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=article_id")
    public Long articleId;
    public PrivateArticleCategoryDeletePathParams withArticleId(Long articleId) {
        this.articleId = articleId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=category_id")
    public Long categoryId;
    public PrivateArticleCategoryDeletePathParams withCategoryId(Long categoryId) {
        this.categoryId = categoryId;
        return this;
    }
}