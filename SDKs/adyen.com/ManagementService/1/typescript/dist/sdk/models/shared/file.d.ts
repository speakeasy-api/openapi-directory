import { SpeakeasyBase } from "../../../internal/utils";
export declare class File extends SpeakeasyBase {
    /**
     * The certificate content converted to a Base64-encoded string.
     */
    data: string;
    /**
     * The name of the certificate. Must be unique across Wi-Fi profiles.
     */
    name: string;
}
