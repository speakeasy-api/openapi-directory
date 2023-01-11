package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminGetTypeStatsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=type")
    public String type;
    public EnterpriseAdminGetTypeStatsPathParams withType(String type) {
        this.type = type;
        return this;
    }
}