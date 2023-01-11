package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchProjectsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public PatchProjectsIdPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}