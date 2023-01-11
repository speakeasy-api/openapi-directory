package openapisdk.models.shared;


public enum BandwidthUnitsEnum {
    G_HZ("GHz"),
    M_HZ("MHz"),
    K_HZ("kHz");

    public final String value;

    private BandwidthUnitsEnum(String value) {
        this.value = value;
    }
}
