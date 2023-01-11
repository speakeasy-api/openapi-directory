package openapisdk.models.shared;


public enum EmotionNameEnum {
    HAPPY("HAPPY"),
    SAD("SAD"),
    ANGRY("ANGRY"),
    CONFUSED("CONFUSED"),
    DISGUSTED("DISGUSTED"),
    SURPRISED("SURPRISED"),
    CALM("CALM"),
    UNKNOWN("UNKNOWN"),
    FEAR("FEAR");

    public final String value;

    private EmotionNameEnum(String value) {
        this.value = value;
    }
}
