package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateArticlePrivateLinkUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=article_id")
    public Long articleId;
    public PrivateArticlePrivateLinkUpdatePathParams withArticleId(Long articleId) {
        this.articleId = articleId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=link_id")
    public String linkId;
    public PrivateArticlePrivateLinkUpdatePathParams withLinkId(String linkId) {
        this.linkId = linkId;
        return this;
    }
}