package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAccountInstitutionReviewCurationIdCommentsRequest {
    public PostAccountInstitutionReviewCurationIdCommentsPathParams pathParams;
    public PostAccountInstitutionReviewCurationIdCommentsRequest withPathParams(PostAccountInstitutionReviewCurationIdCommentsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CurationCommentCreate request;
    public PostAccountInstitutionReviewCurationIdCommentsRequest withRequest(openapisdk.models.shared.CurationCommentCreate request) {
        this.request = request;
        return this;
    }
    public PostAccountInstitutionReviewCurationIdCommentsSecurity security;
    public PostAccountInstitutionReviewCurationIdCommentsRequest withSecurity(PostAccountInstitutionReviewCurationIdCommentsSecurity security) {
        this.security = security;
        return this;
    }
}