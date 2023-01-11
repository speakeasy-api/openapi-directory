package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostReplaceIamInstanceProfileAssociationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostReplaceIamInstanceProfileAssociationActionEnum action;
    public PostReplaceIamInstanceProfileAssociationQueryParams withAction(PostReplaceIamInstanceProfileAssociationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostReplaceIamInstanceProfileAssociationVersionEnum version;
    public PostReplaceIamInstanceProfileAssociationQueryParams withVersion(PostReplaceIamInstanceProfileAssociationVersionEnum version) {
        this.version = version;
        return this;
    }
}