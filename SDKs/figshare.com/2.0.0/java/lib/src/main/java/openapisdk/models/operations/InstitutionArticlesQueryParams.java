package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InstitutionArticlesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filename")
    public String filename;
    public InstitutionArticlesQueryParams withFilename(String filename) {
        this.filename = filename;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=resource_id")
    public String resourceId;
    public InstitutionArticlesQueryParams withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
}