package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchDeleteDevicePositionHistoryRequestBody {
    @JsonProperty("DeviceIds")
    public String[] deviceIds;
    public BatchDeleteDevicePositionHistoryRequestBody withDeviceIds(String[] deviceIds) {
        this.deviceIds = deviceIds;
        return this;
    }
}