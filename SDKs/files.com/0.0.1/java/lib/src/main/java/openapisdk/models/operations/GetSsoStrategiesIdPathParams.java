package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSsoStrategiesIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public GetSsoStrategiesIdPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}