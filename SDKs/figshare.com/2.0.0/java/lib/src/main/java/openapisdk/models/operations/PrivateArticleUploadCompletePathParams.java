package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateArticleUploadCompletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=article_id")
    public Long articleId;
    public PrivateArticleUploadCompletePathParams withArticleId(Long articleId) {
        this.articleId = articleId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=file_id")
    public Long fileId;
    public PrivateArticleUploadCompletePathParams withFileId(Long fileId) {
        this.fileId = fileId;
        return this;
    }
}