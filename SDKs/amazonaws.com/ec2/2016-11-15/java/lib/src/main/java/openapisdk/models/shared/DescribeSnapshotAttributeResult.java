package openapisdk.models.shared;



public class DescribeSnapshotAttributeResult {
    public java.util.Map<String, Object> createVolumePermissions;
    public DescribeSnapshotAttributeResult withCreateVolumePermissions(java.util.Map<String, Object> createVolumePermissions) {
        this.createVolumePermissions = createVolumePermissions;
        return this;
    }
    public java.util.Map<String, Object> productCodes;
    public DescribeSnapshotAttributeResult withProductCodes(java.util.Map<String, Object> productCodes) {
        this.productCodes = productCodes;
        return this;
    }
    public java.util.Map<String, Object> snapshotId;
    public DescribeSnapshotAttributeResult withSnapshotId(java.util.Map<String, Object> snapshotId) {
        this.snapshotId = snapshotId;
        return this;
    }
}