package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateArticleAuthorsReplacePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=article_id")
    public Long articleId;
    public PrivateArticleAuthorsReplacePathParams withArticleId(Long articleId) {
        this.articleId = articleId;
        return this;
    }
}