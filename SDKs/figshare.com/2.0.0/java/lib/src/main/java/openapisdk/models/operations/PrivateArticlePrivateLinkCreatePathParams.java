package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateArticlePrivateLinkCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=article_id")
    public Long articleId;
    public PrivateArticlePrivateLinkCreatePathParams withArticleId(Long articleId) {
        this.articleId = articleId;
        return this;
    }
}