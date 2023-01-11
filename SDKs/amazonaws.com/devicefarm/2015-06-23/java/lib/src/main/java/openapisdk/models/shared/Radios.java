package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Radios
 * Represents the set of radios and their states on a device. Examples of radios include Wi-Fi, GPS, Bluetooth, and NFC.
**/
public class Radios {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bluetooth")
    public Boolean bluetooth;
    public Radios withBluetooth(Boolean bluetooth) {
        this.bluetooth = bluetooth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gps")
    public Boolean gps;
    public Radios withGps(Boolean gps) {
        this.gps = gps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nfc")
    public Boolean nfc;
    public Radios withNfc(Boolean nfc) {
        this.nfc = nfc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wifi")
    public Boolean wifi;
    public Radios withWifi(Boolean wifi) {
        this.wifi = wifi;
        return this;
    }
}