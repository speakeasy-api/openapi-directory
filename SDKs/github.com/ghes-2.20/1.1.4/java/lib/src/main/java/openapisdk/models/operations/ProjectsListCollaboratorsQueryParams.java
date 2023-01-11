package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProjectsListCollaboratorsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=affiliation")
    public openapisdk.models.shared.ProjectIdEnum affiliation;
    public ProjectsListCollaboratorsQueryParams withAffiliation(openapisdk.models.shared.ProjectIdEnum affiliation) {
        this.affiliation = affiliation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public ProjectsListCollaboratorsQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public ProjectsListCollaboratorsQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
}