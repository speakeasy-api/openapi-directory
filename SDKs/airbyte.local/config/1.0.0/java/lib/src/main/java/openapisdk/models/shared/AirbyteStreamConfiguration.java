package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AirbyteStreamConfiguration
 * the mutable part of the stream to configure the destination
**/
public class AirbyteStreamConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aliasName")
    public String aliasName;
    public AirbyteStreamConfiguration withAliasName(String aliasName) {
        this.aliasName = aliasName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cursorField")
    public String[] cursorField;
    public AirbyteStreamConfiguration withCursorField(String[] cursorField) {
        this.cursorField = cursorField;
        return this;
    }
    @JsonProperty("destinationSyncMode")
    public DestinationSyncModeEnum destinationSyncMode;
    public AirbyteStreamConfiguration withDestinationSyncMode(DestinationSyncModeEnum destinationSyncMode) {
        this.destinationSyncMode = destinationSyncMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryKey")
    public String[][] primaryKey;
    public AirbyteStreamConfiguration withPrimaryKey(String[][] primaryKey) {
        this.primaryKey = primaryKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selected")
    public Boolean selected;
    public AirbyteStreamConfiguration withSelected(Boolean selected) {
        this.selected = selected;
        return this;
    }
    @JsonProperty("syncMode")
    public SyncModeEnum syncMode;
    public AirbyteStreamConfiguration withSyncMode(SyncModeEnum syncMode) {
        this.syncMode = syncMode;
        return this;
    }
}