package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeliveryChannelStatus
 * <p>The status of a specified delivery channel.</p> <p>Valid values: <code>Success</code> | <code>Failure</code> </p>
**/
public class DeliveryChannelStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configHistoryDeliveryInfo")
    public ConfigExportDeliveryInfo configHistoryDeliveryInfo;
    public DeliveryChannelStatus withConfigHistoryDeliveryInfo(ConfigExportDeliveryInfo configHistoryDeliveryInfo) {
        this.configHistoryDeliveryInfo = configHistoryDeliveryInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configSnapshotDeliveryInfo")
    public ConfigExportDeliveryInfo configSnapshotDeliveryInfo;
    public DeliveryChannelStatus withConfigSnapshotDeliveryInfo(ConfigExportDeliveryInfo configSnapshotDeliveryInfo) {
        this.configSnapshotDeliveryInfo = configSnapshotDeliveryInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configStreamDeliveryInfo")
    public ConfigStreamDeliveryInfo configStreamDeliveryInfo;
    public DeliveryChannelStatus withConfigStreamDeliveryInfo(ConfigStreamDeliveryInfo configStreamDeliveryInfo) {
        this.configStreamDeliveryInfo = configStreamDeliveryInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public DeliveryChannelStatus withName(String name) {
        this.name = name;
        return this;
    }
}