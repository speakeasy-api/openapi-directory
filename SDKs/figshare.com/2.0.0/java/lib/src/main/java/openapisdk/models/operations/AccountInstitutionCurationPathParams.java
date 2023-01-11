package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccountInstitutionCurationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=curation_id")
    public Long curationId;
    public AccountInstitutionCurationPathParams withCurationId(Long curationId) {
        this.curationId = curationId;
        return this;
    }
}