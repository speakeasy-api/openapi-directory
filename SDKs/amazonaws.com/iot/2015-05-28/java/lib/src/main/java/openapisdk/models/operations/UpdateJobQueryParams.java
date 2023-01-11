package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateJobQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=namespaceId")
    public String namespaceId;
    public UpdateJobQueryParams withNamespaceId(String namespaceId) {
        this.namespaceId = namespaceId;
        return this;
    }
}