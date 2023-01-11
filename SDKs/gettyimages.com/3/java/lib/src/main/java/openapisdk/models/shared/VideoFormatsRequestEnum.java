package openapisdk.models.shared;


public enum VideoFormatsRequestEnum {
    SD("sd"),
    HD("hd"),
    FOURK("4k"),
    HD_WEB("hd_web");

    public final String value;

    private VideoFormatsRequestEnum(String value) {
        this.value = value;
    }
}
