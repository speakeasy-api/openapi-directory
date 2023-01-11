package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EmployeesDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public EmployeesDeletePathParams withId(String id) {
        this.id = id;
        return this;
    }
}