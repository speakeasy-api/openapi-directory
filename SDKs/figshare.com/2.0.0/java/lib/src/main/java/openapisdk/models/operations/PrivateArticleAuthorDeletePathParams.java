package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateArticleAuthorDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=article_id")
    public Long articleId;
    public PrivateArticleAuthorDeletePathParams withArticleId(Long articleId) {
        this.articleId = articleId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=author_id")
    public Long authorId;
    public PrivateArticleAuthorDeletePathParams withAuthorId(Long authorId) {
        this.authorId = authorId;
        return this;
    }
}