package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrganizationExportPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organization_export_gid")
    public String organizationExportGid;
    public GetOrganizationExportPathParams withOrganizationExportGid(String organizationExportGid) {
        this.organizationExportGid = organizationExportGid;
        return this;
    }
}