package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TargetOnDeviceService
 * An object that represents the service or services on the Snow Family device that your transferred data will be exported from or imported into. AWS Snow Family supports Amazon S3 and NFS (Network File System).
**/
public class TargetOnDeviceService {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceName")
    public DeviceServiceNameEnum serviceName;
    public TargetOnDeviceService withServiceName(DeviceServiceNameEnum serviceName) {
        this.serviceName = serviceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TransferOption")
    public TransferOptionEnum transferOption;
    public TargetOnDeviceService withTransferOption(TransferOptionEnum transferOption) {
        this.transferOption = transferOption;
        return this;
    }
}