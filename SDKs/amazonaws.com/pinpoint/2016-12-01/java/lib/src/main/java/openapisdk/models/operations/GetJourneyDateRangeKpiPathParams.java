package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetJourneyDateRangeKpiPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application-id")
    public String applicationId;
    public GetJourneyDateRangeKpiPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=journey-id")
    public String journeyId;
    public GetJourneyDateRangeKpiPathParams withJourneyId(String journeyId) {
        this.journeyId = journeyId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=kpi-name")
    public String kpiName;
    public GetJourneyDateRangeKpiPathParams withKpiName(String kpiName) {
        this.kpiName = kpiName;
        return this;
    }
}