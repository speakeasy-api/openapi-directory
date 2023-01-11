package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddTaskForSectionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=section_gid")
    public String sectionGid;
    public AddTaskForSectionPathParams withSectionGid(String sectionGid) {
        this.sectionGid = sectionGid;
        return this;
    }
}