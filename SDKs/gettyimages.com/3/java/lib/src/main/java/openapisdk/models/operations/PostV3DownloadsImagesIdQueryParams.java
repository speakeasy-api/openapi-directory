package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV3DownloadsImagesIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=auto_download")
    public Boolean autoDownload;
    public PostV3DownloadsImagesIdQueryParams withAutoDownload(Boolean autoDownload) {
        this.autoDownload = autoDownload;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=file_type")
    public openapisdk.models.shared.DownloadFileTypeEnum fileType;
    public PostV3DownloadsImagesIdQueryParams withFileType(openapisdk.models.shared.DownloadFileTypeEnum fileType) {
        this.fileType = fileType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=height")
    public String height;
    public PostV3DownloadsImagesIdQueryParams withHeight(String height) {
        this.height = height;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=product_id")
    public Integer productId;
    public PostV3DownloadsImagesIdQueryParams withProductId(Integer productId) {
        this.productId = productId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=product_type")
    public openapisdk.models.shared.ProductTypeRequestEnum productType;
    public PostV3DownloadsImagesIdQueryParams withProductType(openapisdk.models.shared.ProductTypeRequestEnum productType) {
        this.productType = productType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=use_team_credits")
    public Boolean useTeamCredits;
    public PostV3DownloadsImagesIdQueryParams withUseTeamCredits(Boolean useTeamCredits) {
        this.useTeamCredits = useTeamCredits;
        return this;
    }
}