package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteJobExecutionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=force")
    public Boolean force;
    public DeleteJobExecutionQueryParams withForce(Boolean force) {
        this.force = force;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=namespaceId")
    public String namespaceId;
    public DeleteJobExecutionQueryParams withNamespaceId(String namespaceId) {
        this.namespaceId = namespaceId;
        return this;
    }
}