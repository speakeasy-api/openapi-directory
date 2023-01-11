package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateCollectionArticleDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=article_id")
    public Long articleId;
    public PrivateCollectionArticleDeletePathParams withArticleId(Long articleId) {
        this.articleId = articleId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collection_id")
    public Long collectionId;
    public PrivateCollectionArticleDeletePathParams withCollectionId(Long collectionId) {
        this.collectionId = collectionId;
        return this;
    }
}