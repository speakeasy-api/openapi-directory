package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateWebLoginTokenPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Name")
    public String name;
    public CreateWebLoginTokenPathParams withName(String name) {
        this.name = name;
        return this;
    }
}