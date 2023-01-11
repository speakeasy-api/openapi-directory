package openapisdk.models.shared;


public enum UlimitNameEnum {
    CORE("core"),
    CPU("cpu"),
    DATA("data"),
    FSIZE("fsize"),
    LOCKS("locks"),
    MEMLOCK("memlock"),
    MSGQUEUE("msgqueue"),
    NICE("nice"),
    NOFILE("nofile"),
    NPROC("nproc"),
    RSS("rss"),
    RTPRIO("rtprio"),
    RTTIME("rttime"),
    SIGPENDING("sigpending"),
    STACK("stack");

    public final String value;

    private UlimitNameEnum(String value) {
        this.value = value;
    }
}
