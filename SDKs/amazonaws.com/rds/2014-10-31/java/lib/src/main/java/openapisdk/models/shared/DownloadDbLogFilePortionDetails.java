package openapisdk.models.shared;



/**
 * DownloadDbLogFilePortionDetails
 * This data type is used as a response element to <code>DownloadDBLogFilePortion</code>.
**/
public class DownloadDbLogFilePortionDetails {
    public Boolean additionalDataPending;
    public DownloadDbLogFilePortionDetails withAdditionalDataPending(Boolean additionalDataPending) {
        this.additionalDataPending = additionalDataPending;
        return this;
    }
    public String logFileData;
    public DownloadDbLogFilePortionDetails withLogFileData(String logFileData) {
        this.logFileData = logFileData;
        return this;
    }
    public String marker;
    public DownloadDbLogFilePortionDetails withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}