package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsListProjectsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=accept")
    public String accept;
    public TeamsListProjectsHeaders withAccept(String accept) {
        this.accept = accept;
        return this;
    }
}