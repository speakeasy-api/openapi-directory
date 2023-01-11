package openapisdk.models.shared;


public enum EbsMetricNameEnum {
    VOLUME_READ_OPS_PER_SECOND("VolumeReadOpsPerSecond"),
    VOLUME_WRITE_OPS_PER_SECOND("VolumeWriteOpsPerSecond"),
    VOLUME_READ_BYTES_PER_SECOND("VolumeReadBytesPerSecond"),
    VOLUME_WRITE_BYTES_PER_SECOND("VolumeWriteBytesPerSecond");

    public final String value;

    private EbsMetricNameEnum(String value) {
        this.value = value;
    }
}
