package openapisdk.models.shared;


public enum DuplicateProductValueStrategyEnum {
    NONE("None"),
    SKIP_ALL_DUPLICATE_PRODUCTS("SkipAllDuplicateProducts"),
    KEEP_FIRST_DUPLICATE_PRODUCT_ONLY("KeepFirstDuplicateProductOnly"),
    FAIL_IMPORTATION_IF_ANY_DUPLICATE_PRODUCT("FailImportationIfAnyDuplicateProduct");

    public final String value;

    private DuplicateProductValueStrategyEnum(String value) {
        this.value = value;
    }
}
