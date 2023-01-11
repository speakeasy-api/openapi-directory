package openapisdk.models.shared;


public enum PredicateTypeEnum {
    IP_MATCH("IPMatch"),
    BYTE_MATCH("ByteMatch"),
    SQL_INJECTION_MATCH("SqlInjectionMatch"),
    GEO_MATCH("GeoMatch"),
    SIZE_CONSTRAINT("SizeConstraint"),
    XSS_MATCH("XssMatch"),
    REGEX_MATCH("RegexMatch");

    public final String value;

    private PredicateTypeEnum(String value) {
        this.value = value;
    }
}
