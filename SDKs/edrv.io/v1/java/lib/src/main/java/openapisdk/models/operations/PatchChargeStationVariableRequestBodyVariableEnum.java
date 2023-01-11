package openapisdk.models.operations;


public enum PatchChargeStationVariableRequestBodyVariableEnum {
    METER_VALUE_SAMPLE_INTERVAL("MeterValueSampleInterval"),
    HEARTBEAT_INTERVAL("HeartbeatInterval"),
    CONNECTION_TIME_OUT("ConnectionTimeOut"),
    WEB_SOCKET_PING_INTERVAL("WebSocketPingInterval"),
    TRANSACTION_MESSAGE_RETRY_INTERVAL("TransactionMessageRetryInterval"),
    TRANSACTION_MESSAGE_ATTEMPTS("TransactionMessageAttempts");

    public final String value;

    private PatchChargeStationVariableRequestBodyVariableEnum(String value) {
        this.value = value;
    }
}
