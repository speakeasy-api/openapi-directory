package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateDatabaseClusterRequestBodyMaintenanceWindowInput {
    @JsonProperty("day")
    public String day;
    public CreateDatabaseClusterRequestBodyMaintenanceWindowInput withDay(String day) {
        this.day = day;
        return this;
    }
    @JsonProperty("hour")
    public String hour;
    public CreateDatabaseClusterRequestBodyMaintenanceWindowInput withHour(String hour) {
        this.hour = hour;
        return this;
    }
}