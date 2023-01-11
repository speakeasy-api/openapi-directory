package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCliTokenPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Name")
    public String name;
    public CreateCliTokenPathParams withName(String name) {
        this.name = name;
        return this;
    }
}