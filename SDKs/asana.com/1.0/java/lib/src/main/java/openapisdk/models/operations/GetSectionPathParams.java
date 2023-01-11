package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSectionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=section_gid")
    public String sectionGid;
    public GetSectionPathParams withSectionGid(String sectionGid) {
        this.sectionGid = sectionGid;
        return this;
    }
}