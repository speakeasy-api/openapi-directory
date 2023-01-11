package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAllSnapshotsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public ListAllSnapshotsQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public ListAllSnapshotsQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=resource_type")
    public openapisdk.models.shared.Onev21account1keysGetParameters1Enum resourceType;
    public ListAllSnapshotsQueryParams withResourceType(openapisdk.models.shared.Onev21account1keysGetParameters1Enum resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}