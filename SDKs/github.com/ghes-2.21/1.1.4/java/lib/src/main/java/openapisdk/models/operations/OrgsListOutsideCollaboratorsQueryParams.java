package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrgsListOutsideCollaboratorsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public openapisdk.models.shared.OrgEnum2 filter;
    public OrgsListOutsideCollaboratorsQueryParams withFilter(openapisdk.models.shared.OrgEnum2 filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public OrgsListOutsideCollaboratorsQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public OrgsListOutsideCollaboratorsQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
}