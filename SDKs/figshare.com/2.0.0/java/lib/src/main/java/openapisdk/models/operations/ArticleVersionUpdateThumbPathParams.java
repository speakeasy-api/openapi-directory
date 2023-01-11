package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ArticleVersionUpdateThumbPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=article_id")
    public Long articleId;
    public ArticleVersionUpdateThumbPathParams withArticleId(Long articleId) {
        this.articleId = articleId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=version_id")
    public Long versionId;
    public ArticleVersionUpdateThumbPathParams withVersionId(Long versionId) {
        this.versionId = versionId;
        return this;
    }
}