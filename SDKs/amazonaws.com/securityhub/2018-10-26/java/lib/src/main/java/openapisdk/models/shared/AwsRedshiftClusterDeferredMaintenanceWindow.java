package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsRedshiftClusterDeferredMaintenanceWindow
 * A time windows during which maintenance was deferred for an Amazon Redshift cluster.
**/
public class AwsRedshiftClusterDeferredMaintenanceWindow {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeferMaintenanceEndTime")
    public String deferMaintenanceEndTime;
    public AwsRedshiftClusterDeferredMaintenanceWindow withDeferMaintenanceEndTime(String deferMaintenanceEndTime) {
        this.deferMaintenanceEndTime = deferMaintenanceEndTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeferMaintenanceIdentifier")
    public String deferMaintenanceIdentifier;
    public AwsRedshiftClusterDeferredMaintenanceWindow withDeferMaintenanceIdentifier(String deferMaintenanceIdentifier) {
        this.deferMaintenanceIdentifier = deferMaintenanceIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeferMaintenanceStartTime")
    public String deferMaintenanceStartTime;
    public AwsRedshiftClusterDeferredMaintenanceWindow withDeferMaintenanceStartTime(String deferMaintenanceStartTime) {
        this.deferMaintenanceStartTime = deferMaintenanceStartTime;
        return this;
    }
}