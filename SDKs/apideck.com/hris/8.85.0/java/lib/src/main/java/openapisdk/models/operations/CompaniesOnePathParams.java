package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CompaniesOnePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public CompaniesOnePathParams withId(String id) {
        this.id = id;
        return this;
    }
}