package openapisdk.models.shared;



/**
 * PendingCloudwatchLogsExports
 * A list of the log types whose configuration is still pending. In other words, these log types are in the process of being activated or deactivated.
**/
public class PendingCloudwatchLogsExports {
    public String[] logTypesToDisable;
    public PendingCloudwatchLogsExports withLogTypesToDisable(String[] logTypesToDisable) {
        this.logTypesToDisable = logTypesToDisable;
        return this;
    }
    public String[] logTypesToEnable;
    public PendingCloudwatchLogsExports withLogTypesToEnable(String[] logTypesToEnable) {
        this.logTypesToEnable = logTypesToEnable;
        return this;
    }
}