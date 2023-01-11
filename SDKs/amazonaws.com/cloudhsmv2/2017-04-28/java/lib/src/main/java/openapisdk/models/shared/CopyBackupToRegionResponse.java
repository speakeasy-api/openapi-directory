package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CopyBackupToRegionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DestinationBackup")
    public DestinationBackup destinationBackup;
    public CopyBackupToRegionResponse withDestinationBackup(DestinationBackup destinationBackup) {
        this.destinationBackup = destinationBackup;
        return this;
    }
}