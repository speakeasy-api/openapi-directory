package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsAddOrUpdateProjectPermissionsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=accept")
    public String accept;
    public TeamsAddOrUpdateProjectPermissionsHeaders withAccept(String accept) {
        this.accept = accept;
        return this;
    }
}