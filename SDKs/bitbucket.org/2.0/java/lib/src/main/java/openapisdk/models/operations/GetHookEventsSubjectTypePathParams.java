package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetHookEventsSubjectTypePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=subject_type")
    public GetHookEventsSubjectTypeSubjectTypeEnum subjectType;
    public GetHookEventsSubjectTypePathParams withSubjectType(GetHookEventsSubjectTypeSubjectTypeEnum subjectType) {
        this.subjectType = subjectType;
        return this;
    }
}