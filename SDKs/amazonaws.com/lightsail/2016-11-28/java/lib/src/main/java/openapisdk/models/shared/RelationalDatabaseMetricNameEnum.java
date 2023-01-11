package openapisdk.models.shared;


public enum RelationalDatabaseMetricNameEnum {
    CPU_UTILIZATION("CPUUtilization"),
    DATABASE_CONNECTIONS("DatabaseConnections"),
    DISK_QUEUE_DEPTH("DiskQueueDepth"),
    FREE_STORAGE_SPACE("FreeStorageSpace"),
    NETWORK_RECEIVE_THROUGHPUT("NetworkReceiveThroughput"),
    NETWORK_TRANSMIT_THROUGHPUT("NetworkTransmitThroughput");

    public final String value;

    private RelationalDatabaseMetricNameEnum(String value) {
        this.value = value;
    }
}
