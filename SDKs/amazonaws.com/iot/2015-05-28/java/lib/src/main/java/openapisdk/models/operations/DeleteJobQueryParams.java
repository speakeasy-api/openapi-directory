package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteJobQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=force")
    public Boolean force;
    public DeleteJobQueryParams withForce(Boolean force) {
        this.force = force;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=namespaceId")
    public String namespaceId;
    public DeleteJobQueryParams withNamespaceId(String namespaceId) {
        this.namespaceId = namespaceId;
        return this;
    }
}