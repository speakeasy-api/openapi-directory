package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsCheckPermissionsForProjectHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=accept")
    public String accept;
    public TeamsCheckPermissionsForProjectHeaders withAccept(String accept) {
        this.accept = accept;
        return this;
    }
}