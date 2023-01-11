package openapisdk.models.shared;



/**
 * TableRestoreStatusMessage
 * <p/>
**/
public class TableRestoreStatusMessage {
    public String marker;
    public TableRestoreStatusMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    public TableRestoreStatusList[] tableRestoreStatusDetails;
    public TableRestoreStatusMessage withTableRestoreStatusDetails(TableRestoreStatusList[] tableRestoreStatusDetails) {
        this.tableRestoreStatusDetails = tableRestoreStatusDetails;
        return this;
    }
}