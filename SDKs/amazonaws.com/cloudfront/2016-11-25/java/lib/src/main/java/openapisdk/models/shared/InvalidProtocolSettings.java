package openapisdk.models.shared;



/**
 * InvalidProtocolSettings
 * You cannot specify SSLv3 as the minimum protocol version if you only want to support only clients that support Server Name Indication (SNI).
**/
public class InvalidProtocolSettings {
    public String message;
    public InvalidProtocolSettings withMessage(String message) {
        this.message = message;
        return this;
    }
}