package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateAuthorDetailsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=author_id")
    public Long authorId;
    public PrivateAuthorDetailsPathParams withAuthorId(Long authorId) {
        this.authorId = authorId;
        return this;
    }
}