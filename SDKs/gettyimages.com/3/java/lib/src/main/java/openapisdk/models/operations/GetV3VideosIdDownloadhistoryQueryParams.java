package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV3VideosIdDownloadhistoryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=company_downloads")
    public Boolean companyDownloads;
    public GetV3VideosIdDownloadhistoryQueryParams withCompanyDownloads(Boolean companyDownloads) {
        this.companyDownloads = companyDownloads;
        return this;
    }
}