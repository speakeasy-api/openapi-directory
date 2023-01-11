package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV3ImagesIdDownloadhistoryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=company_downloads")
    public Boolean companyDownloads;
    public GetV3ImagesIdDownloadhistoryQueryParams withCompanyDownloads(Boolean companyDownloads) {
        this.companyDownloads = companyDownloads;
        return this;
    }
}