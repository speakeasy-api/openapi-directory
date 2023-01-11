package openapisdk.models.shared;


public enum MinimumProtocolVersionEnum {
    SS_LV3("SSLv3"),
    TL_SV1("TLSv1"),
    TL_SV12016("TLSv1_2016"),
    TL_SV112016("TLSv1.1_2016"),
    TL_SV122018("TLSv1.2_2018");

    public final String value;

    private MinimumProtocolVersionEnum(String value) {
        this.value = value;
    }
}
