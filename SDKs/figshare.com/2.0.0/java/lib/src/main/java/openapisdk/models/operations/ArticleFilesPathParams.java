package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ArticleFilesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=article_id")
    public Long articleId;
    public ArticleFilesPathParams withArticleId(Long articleId) {
        this.articleId = articleId;
        return this;
    }
}