package openapisdk.models.shared;


public enum ApiKeyEnum7 {
    MAKE("make"),
    MODEL("model"),
    TRIM("trim"),
    BODY_TYPE("body_type"),
    BODY_SUBTYPE("body_subtype"),
    VEHICLE_TYPE("vehicle_type"),
    TRANSMISSION("transmission"),
    DRIVETRAIN("drivetrain"),
    FUEL_TYPE("fuel_type"),
    ENGINE("engine"),
    ENGINE_SIZE("engine_size"),
    ENGINE_BLOCK("engine_block");

    public final String value;

    private ApiKeyEnum7(String value) {
        this.value = value;
    }
}
