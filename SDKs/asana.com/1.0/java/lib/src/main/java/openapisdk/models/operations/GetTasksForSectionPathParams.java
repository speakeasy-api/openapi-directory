package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTasksForSectionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=section_gid")
    public String sectionGid;
    public GetTasksForSectionPathParams withSectionGid(String sectionGid) {
        this.sectionGid = sectionGid;
        return this;
    }
}