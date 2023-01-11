package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateArticleEmbargoDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=article_id")
    public Long articleId;
    public PrivateArticleEmbargoDeletePathParams withArticleId(Long articleId) {
        this.articleId = articleId;
        return this;
    }
}