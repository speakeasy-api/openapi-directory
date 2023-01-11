package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddOn
 * Describes an add-on that is enabled for an Amazon Lightsail resource.
**/
public class AddOn {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AddOn withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextSnapshotTimeOfDay")
    public String nextSnapshotTimeOfDay;
    public AddOn withNextSnapshotTimeOfDay(String nextSnapshotTimeOfDay) {
        this.nextSnapshotTimeOfDay = nextSnapshotTimeOfDay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snapshotTimeOfDay")
    public String snapshotTimeOfDay;
    public AddOn withSnapshotTimeOfDay(String snapshotTimeOfDay) {
        this.snapshotTimeOfDay = snapshotTimeOfDay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public AddOn withStatus(String status) {
        this.status = status;
        return this;
    }
}