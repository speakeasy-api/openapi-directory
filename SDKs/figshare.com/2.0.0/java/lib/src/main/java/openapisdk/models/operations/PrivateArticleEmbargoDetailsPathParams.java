package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateArticleEmbargoDetailsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=article_id")
    public Long articleId;
    public PrivateArticleEmbargoDetailsPathParams withArticleId(Long articleId) {
        this.articleId = articleId;
        return this;
    }
}