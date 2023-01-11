package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV3DownloadsVideosIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=auto_download")
    public Boolean autoDownload;
    public PostV3DownloadsVideosIdQueryParams withAutoDownload(Boolean autoDownload) {
        this.autoDownload = autoDownload;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=product_id")
    public Integer productId;
    public PostV3DownloadsVideosIdQueryParams withProductId(Integer productId) {
        this.productId = productId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=size")
    public String size;
    public PostV3DownloadsVideosIdQueryParams withSize(String size) {
        this.size = size;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=use_team_credits")
    public Boolean useTeamCredits;
    public PostV3DownloadsVideosIdQueryParams withUseTeamCredits(Boolean useTeamCredits) {
        this.useTeamCredits = useTeamCredits;
        return this;
    }
}