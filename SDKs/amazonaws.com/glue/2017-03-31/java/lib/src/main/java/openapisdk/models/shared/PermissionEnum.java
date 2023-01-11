package openapisdk.models.shared;


public enum PermissionEnum {
    ALL("ALL"),
    SELECT("SELECT"),
    ALTER("ALTER"),
    DROP("DROP"),
    DELETE("DELETE"),
    INSERT("INSERT"),
    CREATE_DATABASE("CREATE_DATABASE"),
    CREATE_TABLE("CREATE_TABLE"),
    DATA_LOCATION_ACCESS("DATA_LOCATION_ACCESS");

    public final String value;

    private PermissionEnum(String value) {
        this.value = value;
    }
}
