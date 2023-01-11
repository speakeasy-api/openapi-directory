package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetScheduleTemplatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=schedule_template_id")
    public String scheduleTemplateId;
    public GetScheduleTemplatePathParams withScheduleTemplateId(String scheduleTemplateId) {
        this.scheduleTemplateId = scheduleTemplateId;
        return this;
    }
}