package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSectionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=section_gid")
    public String sectionGid;
    public UpdateSectionPathParams withSectionGid(String sectionGid) {
        this.sectionGid = sectionGid;
        return this;
    }
}