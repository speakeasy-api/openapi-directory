package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateArticleUploadInitiatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=article_id")
    public Long articleId;
    public PrivateArticleUploadInitiatePathParams withArticleId(Long articleId) {
        this.articleId = articleId;
        return this;
    }
}