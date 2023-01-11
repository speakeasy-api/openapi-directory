package openapisdk.models.shared;


public enum TierEnum {
    CUSTOM("CUSTOM"),
    DEFAULT_("DEFAULT"),
    DOT_NET_CORE("DOT_NET_CORE"),
    DOT_NET_WORKER("DOT_NET_WORKER"),
    DOT_NET_WEB_TIER("DOT_NET_WEB_TIER"),
    DOT_NET_WEB("DOT_NET_WEB"),
    SQL_SERVER("SQL_SERVER"),
    SQL_SERVER_ALWAYSON_AVAILABILITY_GROUP("SQL_SERVER_ALWAYSON_AVAILABILITY_GROUP"),
    MYSQL("MYSQL"),
    POSTGRESQL("POSTGRESQL"),
    JAVA_JMX("JAVA_JMX"),
    ORACLE("ORACLE");

    public final String value;

    private TierEnum(String value) {
        this.value = value;
    }
}
