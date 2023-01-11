package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersGetContextForUserQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=subject_id")
    public String subjectId;
    public UsersGetContextForUserQueryParams withSubjectId(String subjectId) {
        this.subjectId = subjectId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=subject_type")
    public openapisdk.models.shared.UsernameEnum subjectType;
    public UsersGetContextForUserQueryParams withSubjectType(openapisdk.models.shared.UsernameEnum subjectType) {
        this.subjectType = subjectType;
        return this;
    }
}