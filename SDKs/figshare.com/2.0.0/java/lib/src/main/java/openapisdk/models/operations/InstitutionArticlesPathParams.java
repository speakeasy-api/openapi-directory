package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InstitutionArticlesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=institution_string_id")
    public String institutionStringId;
    public InstitutionArticlesPathParams withInstitutionStringId(String institutionStringId) {
        this.institutionStringId = institutionStringId;
        return this;
    }
}