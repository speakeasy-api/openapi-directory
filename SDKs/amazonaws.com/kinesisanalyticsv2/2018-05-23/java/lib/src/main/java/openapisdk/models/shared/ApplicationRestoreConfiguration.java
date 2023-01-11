package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApplicationRestoreConfiguration
 * Specifies the method and snapshot to use when restarting an application using previously saved application state.
**/
public class ApplicationRestoreConfiguration {
    @JsonProperty("ApplicationRestoreType")
    public ApplicationRestoreTypeEnum applicationRestoreType;
    public ApplicationRestoreConfiguration withApplicationRestoreType(ApplicationRestoreTypeEnum applicationRestoreType) {
        this.applicationRestoreType = applicationRestoreType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SnapshotName")
    public String snapshotName;
    public ApplicationRestoreConfiguration withSnapshotName(String snapshotName) {
        this.snapshotName = snapshotName;
        return this;
    }
}