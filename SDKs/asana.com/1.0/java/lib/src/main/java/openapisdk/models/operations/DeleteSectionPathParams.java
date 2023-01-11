package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSectionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=section_gid")
    public String sectionGid;
    public DeleteSectionPathParams withSectionGid(String sectionGid) {
        this.sectionGid = sectionGid;
        return this;
    }
}