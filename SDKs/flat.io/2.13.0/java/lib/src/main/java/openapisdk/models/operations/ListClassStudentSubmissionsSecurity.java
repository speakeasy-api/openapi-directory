package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListClassStudentSubmissionsSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeOAuth2 oAuth2;
    public ListClassStudentSubmissionsSecurity withOAuth2(openapisdk.models.shared.SchemeOAuth2 oAuth2) {
        this.oAuth2 = oAuth2;
        return this;
    }
}