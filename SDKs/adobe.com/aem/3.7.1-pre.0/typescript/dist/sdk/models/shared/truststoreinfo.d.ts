import { SpeakeasyBase } from "../../../internal/utils";
import { TruststoreItems } from "./truststoreitems";
/**
 * Retrieved AEM Truststore info
 */
export declare class TruststoreInfo extends SpeakeasyBase {
    aliases?: TruststoreItems[];
    /**
     * False if truststore don't exist
     */
    exists?: boolean;
}
