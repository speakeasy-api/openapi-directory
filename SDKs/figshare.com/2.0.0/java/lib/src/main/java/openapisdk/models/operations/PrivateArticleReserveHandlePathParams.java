package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateArticleReserveHandlePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=article_id")
    public Long articleId;
    public PrivateArticleReserveHandlePathParams withArticleId(Long articleId) {
        this.articleId = articleId;
        return this;
    }
}