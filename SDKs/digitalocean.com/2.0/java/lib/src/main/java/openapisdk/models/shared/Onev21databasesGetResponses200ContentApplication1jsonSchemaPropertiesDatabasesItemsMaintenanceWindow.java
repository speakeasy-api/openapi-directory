package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsMaintenanceWindow {
    @JsonProperty("day")
    public String day;
    public Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsMaintenanceWindow withDay(String day) {
        this.day = day;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String[] description;
    public Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsMaintenanceWindow withDescription(String[] description) {
        this.description = description;
        return this;
    }
    @JsonProperty("hour")
    public String hour;
    public Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsMaintenanceWindow withHour(String hour) {
        this.hour = hour;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pending")
    public Boolean pending;
    public Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsMaintenanceWindow withPending(Boolean pending) {
        this.pending = pending;
        return this;
    }
}