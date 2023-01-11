package openapisdk.models.shared;


public enum MetricNameEnum {
    CPU_UTILIZATION("CPUUtilization"),
    NETWORK_IN("NetworkIn"),
    NETWORK_OUT("NetworkOut"),
    STATUS_CHECK_FAILED("StatusCheckFailed"),
    STATUS_CHECK_FAILED_INSTANCE("StatusCheckFailed_Instance"),
    STATUS_CHECK_FAILED_SYSTEM("StatusCheckFailed_System"),
    CLIENT_TLS_NEGOTIATION_ERROR_COUNT("ClientTLSNegotiationErrorCount"),
    HEALTHY_HOST_COUNT("HealthyHostCount"),
    UNHEALTHY_HOST_COUNT("UnhealthyHostCount"),
    HTTP_CODE_LB4_XX_COUNT("HTTPCode_LB_4XX_Count"),
    HTTP_CODE_LB5_XX_COUNT("HTTPCode_LB_5XX_Count"),
    HTTP_CODE_INSTANCE2_XX_COUNT("HTTPCode_Instance_2XX_Count"),
    HTTP_CODE_INSTANCE3_XX_COUNT("HTTPCode_Instance_3XX_Count"),
    HTTP_CODE_INSTANCE4_XX_COUNT("HTTPCode_Instance_4XX_Count"),
    HTTP_CODE_INSTANCE5_XX_COUNT("HTTPCode_Instance_5XX_Count"),
    INSTANCE_RESPONSE_TIME("InstanceResponseTime"),
    REJECTED_CONNECTION_COUNT("RejectedConnectionCount"),
    REQUEST_COUNT("RequestCount"),
    DATABASE_CONNECTIONS("DatabaseConnections"),
    DISK_QUEUE_DEPTH("DiskQueueDepth"),
    FREE_STORAGE_SPACE("FreeStorageSpace"),
    NETWORK_RECEIVE_THROUGHPUT("NetworkReceiveThroughput"),
    NETWORK_TRANSMIT_THROUGHPUT("NetworkTransmitThroughput"),
    BURST_CAPACITY_TIME("BurstCapacityTime"),
    BURST_CAPACITY_PERCENTAGE("BurstCapacityPercentage");

    public final String value;

    private MetricNameEnum(String value) {
        this.value = value;
    }
}
