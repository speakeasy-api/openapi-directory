package openapisdk.models.shared;


public enum GameSessionPlacementStateEnum {
    PENDING("PENDING"),
    FULFILLED("FULFILLED"),
    CANCELLED("CANCELLED"),
    TIMED_OUT("TIMED_OUT"),
    FAILED("FAILED");

    public final String value;

    private GameSessionPlacementStateEnum(String value) {
        this.value = value;
    }
}
