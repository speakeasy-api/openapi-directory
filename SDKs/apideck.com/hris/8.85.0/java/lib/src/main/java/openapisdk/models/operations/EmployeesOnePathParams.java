package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EmployeesOnePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public EmployeesOnePathParams withId(String id) {
        this.id = id;
        return this;
    }
}