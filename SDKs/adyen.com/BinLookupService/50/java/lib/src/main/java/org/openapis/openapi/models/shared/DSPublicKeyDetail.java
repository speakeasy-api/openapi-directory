/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class DSPublicKeyDetail {
    /**
     * Card brand.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("brand")
    public String brand;

    public DSPublicKeyDetail withBrand(String brand) {
        this.brand = brand;
        return this;
    }
    
    /**
     * Directory Server (DS) identifier.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("directoryServerId")
    public String directoryServerId;

    public DSPublicKeyDetail withDirectoryServerId(String directoryServerId) {
        this.directoryServerId = directoryServerId;
        return this;
    }
    
    /**
     * The version of the mobile 3D Secure 2 SDK. For the possible values, refer to the versions in [Adyen 3DS2 Android](https://github.com/Adyen/adyen-3ds2-android/releases) and [Adyen 3DS2 iOS](https://github.com/Adyen/adyen-3ds2-ios/releases).
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fromSDKVersion")
    public String fromSDKVersion;

    public DSPublicKeyDetail withFromSDKVersion(String fromSDKVersion) {
        this.fromSDKVersion = fromSDKVersion;
        return this;
    }
    
    /**
     * Public key. The 3D Secure 2 SDK encrypts the device information by using the DS public key.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publicKey")
    public String publicKey;

    public DSPublicKeyDetail withPublicKey(String publicKey) {
        this.publicKey = publicKey;
        return this;
    }
    
    public DSPublicKeyDetail(){}
}
