package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchGetDevicePositionRequestBody {
    @JsonProperty("DeviceIds")
    public String[] deviceIds;
    public BatchGetDevicePositionRequestBody withDeviceIds(String[] deviceIds) {
        this.deviceIds = deviceIds;
        return this;
    }
}