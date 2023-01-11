package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MaintenanceStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connection_services")
    public MaintenanceStatusConnectionServices[] connectionServices;
    public MaintenanceStatus withConnectionServices(MaintenanceStatusConnectionServices[] connectionServices) {
        this.connectionServices = connectionServices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduled_time")
    public String scheduledTime;
    public MaintenanceStatus withScheduledTime(String scheduledTime) {
        this.scheduledTime = scheduledTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public MaintenanceStatus withStatus(String status) {
        this.status = status;
        return this;
    }
}