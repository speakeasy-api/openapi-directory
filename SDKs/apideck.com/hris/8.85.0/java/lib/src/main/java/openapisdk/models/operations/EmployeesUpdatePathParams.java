package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EmployeesUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public EmployeesUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}