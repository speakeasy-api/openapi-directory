package openapisdk.models.shared;



public class CustomerStorageMessage {
    public Double totalBackupSizeInMegaBytes;
    public CustomerStorageMessage withTotalBackupSizeInMegaBytes(Double totalBackupSizeInMegaBytes) {
        this.totalBackupSizeInMegaBytes = totalBackupSizeInMegaBytes;
        return this;
    }
    public Double totalProvisionedStorageInMegaBytes;
    public CustomerStorageMessage withTotalProvisionedStorageInMegaBytes(Double totalProvisionedStorageInMegaBytes) {
        this.totalProvisionedStorageInMegaBytes = totalProvisionedStorageInMegaBytes;
        return this;
    }
}