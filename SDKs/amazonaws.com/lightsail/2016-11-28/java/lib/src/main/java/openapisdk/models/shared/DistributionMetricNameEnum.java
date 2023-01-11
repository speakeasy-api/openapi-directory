package openapisdk.models.shared;


public enum DistributionMetricNameEnum {
    REQUESTS("Requests"),
    BYTES_DOWNLOADED("BytesDownloaded"),
    BYTES_UPLOADED("BytesUploaded"),
    TOTAL_ERROR_RATE("TotalErrorRate"),
    HTTP4XX_ERROR_RATE("Http4xxErrorRate"),
    HTTP5XX_ERROR_RATE("Http5xxErrorRate");

    public final String value;

    private DistributionMetricNameEnum(String value) {
        this.value = value;
    }
}
