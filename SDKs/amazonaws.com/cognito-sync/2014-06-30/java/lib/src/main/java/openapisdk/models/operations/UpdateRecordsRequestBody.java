package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateRecordsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeviceId")
    public String deviceId;
    public UpdateRecordsRequestBody withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RecordPatches")
    public openapisdk.models.shared.RecordPatch[] recordPatches;
    public UpdateRecordsRequestBody withRecordPatches(openapisdk.models.shared.RecordPatch[] recordPatches) {
        this.recordPatches = recordPatches;
        return this;
    }
    @JsonProperty("SyncSessionToken")
    public String syncSessionToken;
    public UpdateRecordsRequestBody withSyncSessionToken(String syncSessionToken) {
        this.syncSessionToken = syncSessionToken;
        return this;
    }
}