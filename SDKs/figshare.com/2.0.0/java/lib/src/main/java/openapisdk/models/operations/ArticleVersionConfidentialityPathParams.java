package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ArticleVersionConfidentialityPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=article_id")
    public Long articleId;
    public ArticleVersionConfidentialityPathParams withArticleId(Long articleId) {
        this.articleId = articleId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=v_number")
    public Long vNumber;
    public ArticleVersionConfidentialityPathParams withVNumber(Long vNumber) {
        this.vNumber = vNumber;
        return this;
    }
}