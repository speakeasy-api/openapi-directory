package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CompaniesUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public CompaniesUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}