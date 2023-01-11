package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV3DownloadsVideosIdRequests {
    @SpeakeasyMetadata("request:mediaType=application/*+json")
    public openapisdk.models.shared.PremiumAccessDownloadData premiumAccessDownloadData;
    public PostV3DownloadsVideosIdRequests withPremiumAccessDownloadData(openapisdk.models.shared.PremiumAccessDownloadData premiumAccessDownloadData) {
        this.premiumAccessDownloadData = premiumAccessDownloadData;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PremiumAccessDownloadData premiumAccessDownloadData1;
    public PostV3DownloadsVideosIdRequests withPremiumAccessDownloadData1(openapisdk.models.shared.PremiumAccessDownloadData premiumAccessDownloadData1) {
        this.premiumAccessDownloadData1 = premiumAccessDownloadData1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json-patch+json")
    public openapisdk.models.shared.PremiumAccessDownloadData premiumAccessDownloadData2;
    public PostV3DownloadsVideosIdRequests withPremiumAccessDownloadData2(openapisdk.models.shared.PremiumAccessDownloadData premiumAccessDownloadData2) {
        this.premiumAccessDownloadData2 = premiumAccessDownloadData2;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.PremiumAccessDownloadData premiumAccessDownloadData3;
    public PostV3DownloadsVideosIdRequests withPremiumAccessDownloadData3(openapisdk.models.shared.PremiumAccessDownloadData premiumAccessDownloadData3) {
        this.premiumAccessDownloadData3 = premiumAccessDownloadData3;
        return this;
    }
}