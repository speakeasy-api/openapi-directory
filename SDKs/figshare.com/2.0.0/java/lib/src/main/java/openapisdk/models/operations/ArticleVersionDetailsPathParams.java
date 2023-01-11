package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ArticleVersionDetailsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=article_id")
    public Long articleId;
    public ArticleVersionDetailsPathParams withArticleId(Long articleId) {
        this.articleId = articleId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=v_number")
    public Long vNumber;
    public ArticleVersionDetailsPathParams withVNumber(Long vNumber) {
        this.vNumber = vNumber;
        return this;
    }
}