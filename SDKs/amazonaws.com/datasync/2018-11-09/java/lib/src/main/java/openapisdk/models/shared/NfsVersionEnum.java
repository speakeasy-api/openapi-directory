package openapisdk.models.shared;


public enum NfsVersionEnum {
    AUTOMATIC("AUTOMATIC"),
    NFS3("NFS3"),
    NFS40("NFS4_0"),
    NFS41("NFS4_1");

    public final String value;

    private NfsVersionEnum(String value) {
        this.value = value;
    }
}
