package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PlayReadyDrm
 * <p>The PlayReady DRM settings, if any, that you want Elastic Transcoder to apply to the output files associated with this playlist.</p> <p>PlayReady DRM encrypts your media files using <code>aes-ctr</code> encryption.</p> <p>If you use DRM for an <code>HLSv3</code> playlist, your outputs must have a master playlist.</p>
**/
public class PlayReadyDrm {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Format")
    public String format;
    public PlayReadyDrm withFormat(String format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InitializationVector")
    public String initializationVector;
    public PlayReadyDrm withInitializationVector(String initializationVector) {
        this.initializationVector = initializationVector;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Key")
    public String key;
    public PlayReadyDrm withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KeyId")
    public String keyId;
    public PlayReadyDrm withKeyId(String keyId) {
        this.keyId = keyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KeyMd5")
    public String keyMd5;
    public PlayReadyDrm withKeyMd5(String keyMd5) {
        this.keyMd5 = keyMd5;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LicenseAcquisitionUrl")
    public String licenseAcquisitionUrl;
    public PlayReadyDrm withLicenseAcquisitionUrl(String licenseAcquisitionUrl) {
        this.licenseAcquisitionUrl = licenseAcquisitionUrl;
        return this;
    }
}