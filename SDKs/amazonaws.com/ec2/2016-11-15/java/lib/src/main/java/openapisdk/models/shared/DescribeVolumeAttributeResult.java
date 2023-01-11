package openapisdk.models.shared;



public class DescribeVolumeAttributeResult {
    public DescribeVolumeAttributeResultAutoEnableIo autoEnableIO;
    public DescribeVolumeAttributeResult withAutoEnableIo(DescribeVolumeAttributeResultAutoEnableIo autoEnableIO) {
        this.autoEnableIO = autoEnableIO;
        return this;
    }
    public java.util.Map<String, Object> productCodes;
    public DescribeVolumeAttributeResult withProductCodes(java.util.Map<String, Object> productCodes) {
        this.productCodes = productCodes;
        return this;
    }
    public java.util.Map<String, Object> volumeId;
    public DescribeVolumeAttributeResult withVolumeId(java.util.Map<String, Object> volumeId) {
        this.volumeId = volumeId;
        return this;
    }
}