package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrgsListAppInstallationsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=accept")
    public String accept;
    public OrgsListAppInstallationsHeaders withAccept(String accept) {
        this.accept = accept;
        return this;
    }
}