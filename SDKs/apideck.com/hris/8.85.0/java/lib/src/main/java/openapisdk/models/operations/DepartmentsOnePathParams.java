package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DepartmentsOnePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DepartmentsOnePathParams withId(String id) {
        this.id = id;
        return this;
    }
}