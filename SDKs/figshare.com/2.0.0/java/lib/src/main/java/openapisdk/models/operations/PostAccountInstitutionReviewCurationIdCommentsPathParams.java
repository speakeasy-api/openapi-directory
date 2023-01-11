package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAccountInstitutionReviewCurationIdCommentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=curation_id")
    public Long curationId;
    public PostAccountInstitutionReviewCurationIdCommentsPathParams withCurationId(Long curationId) {
        this.curationId = curationId;
        return this;
    }
}