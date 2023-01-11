package openapisdk.models.operations;


public enum PostDropletActionRequestBody5TypeEnum {
    ENABLE_BACKUPS("enable_backups"),
    DISABLE_BACKUPS("disable_backups"),
    REBOOT("reboot"),
    POWER_CYCLE("power_cycle"),
    SHUTDOWN("shutdown"),
    POWER_OFF("power_off"),
    POWER_ON("power_on"),
    RESTORE("restore"),
    PASSWORD_RESET("password_reset"),
    RESIZE("resize"),
    REBUILD("rebuild"),
    RENAME("rename"),
    CHANGE_KERNEL("change_kernel"),
    ENABLE_IPV6("enable_ipv6"),
    SNAPSHOT("snapshot");

    public final String value;

    private PostDropletActionRequestBody5TypeEnum(String value) {
        this.value = value;
    }
}
