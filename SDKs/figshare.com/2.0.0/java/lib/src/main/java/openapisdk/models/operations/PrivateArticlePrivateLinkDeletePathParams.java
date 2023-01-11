package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateArticlePrivateLinkDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=article_id")
    public Long articleId;
    public PrivateArticlePrivateLinkDeletePathParams withArticleId(Long articleId) {
        this.articleId = articleId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=link_id")
    public String linkId;
    public PrivateArticlePrivateLinkDeletePathParams withLinkId(String linkId) {
        this.linkId = linkId;
        return this;
    }
}