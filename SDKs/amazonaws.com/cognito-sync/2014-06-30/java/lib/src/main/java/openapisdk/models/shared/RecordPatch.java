package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * RecordPatch
 * An update operation for a record.
**/
public class RecordPatch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("DeviceLastModifiedDate")
    public OffsetDateTime deviceLastModifiedDate;
    public RecordPatch withDeviceLastModifiedDate(OffsetDateTime deviceLastModifiedDate) {
        this.deviceLastModifiedDate = deviceLastModifiedDate;
        return this;
    }
    @JsonProperty("Key")
    public String key;
    public RecordPatch withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonProperty("Op")
    public OperationEnum op;
    public RecordPatch withOp(OperationEnum op) {
        this.op = op;
        return this;
    }
    @JsonProperty("SyncCount")
    public Long syncCount;
    public RecordPatch withSyncCount(Long syncCount) {
        this.syncCount = syncCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Value")
    public String value;
    public RecordPatch withValue(String value) {
        this.value = value;
        return this;
    }
}