package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CompanyMonitorRegisterPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public CompanyMonitorRegisterPathParams withId(String id) {
        this.id = id;
        return this;
    }
}