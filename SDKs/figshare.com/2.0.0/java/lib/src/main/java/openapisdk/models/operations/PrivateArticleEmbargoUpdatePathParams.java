package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateArticleEmbargoUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=article_id")
    public Long articleId;
    public PrivateArticleEmbargoUpdatePathParams withArticleId(Long articleId) {
        this.articleId = articleId;
        return this;
    }
}