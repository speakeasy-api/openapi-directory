package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApplicationDateRangeKpiPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application-id")
    public String applicationId;
    public GetApplicationDateRangeKpiPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=kpi-name")
    public String kpiName;
    public GetApplicationDateRangeKpiPathParams withKpiName(String kpiName) {
        this.kpiName = kpiName;
        return this;
    }
}