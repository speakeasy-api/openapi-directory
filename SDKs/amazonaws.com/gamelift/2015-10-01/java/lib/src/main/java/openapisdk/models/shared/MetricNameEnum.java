package openapisdk.models.shared;


public enum MetricNameEnum {
    ACTIVATING_GAME_SESSIONS("ActivatingGameSessions"),
    ACTIVE_GAME_SESSIONS("ActiveGameSessions"),
    ACTIVE_INSTANCES("ActiveInstances"),
    AVAILABLE_GAME_SESSIONS("AvailableGameSessions"),
    AVAILABLE_PLAYER_SESSIONS("AvailablePlayerSessions"),
    CURRENT_PLAYER_SESSIONS("CurrentPlayerSessions"),
    IDLE_INSTANCES("IdleInstances"),
    PERCENT_AVAILABLE_GAME_SESSIONS("PercentAvailableGameSessions"),
    PERCENT_IDLE_INSTANCES("PercentIdleInstances"),
    QUEUE_DEPTH("QueueDepth"),
    WAIT_TIME("WaitTime");

    public final String value;

    private MetricNameEnum(String value) {
        this.value = value;
    }
}
