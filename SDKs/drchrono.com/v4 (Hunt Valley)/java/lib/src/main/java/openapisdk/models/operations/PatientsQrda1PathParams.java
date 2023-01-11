package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatientsQrda1PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PatientsQrda1PathParams withId(String id) {
        this.id = id;
        return this;
    }
}