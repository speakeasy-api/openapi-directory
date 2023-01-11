package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateArticleFilesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=article_id")
    public Long articleId;
    public PrivateArticleFilesListPathParams withArticleId(Long articleId) {
        this.articleId = articleId;
        return this;
    }
}