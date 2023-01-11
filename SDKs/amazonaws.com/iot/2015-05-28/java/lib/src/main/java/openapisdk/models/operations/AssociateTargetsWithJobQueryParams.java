package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateTargetsWithJobQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=namespaceId")
    public String namespaceId;
    public AssociateTargetsWithJobQueryParams withNamespaceId(String namespaceId) {
        this.namespaceId = namespaceId;
        return this;
    }
}