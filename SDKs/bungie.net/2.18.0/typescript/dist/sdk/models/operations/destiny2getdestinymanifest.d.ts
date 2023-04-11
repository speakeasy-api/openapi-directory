import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * DestinyManifest is the external-facing contract for just the properties needed by those calling the Destiny Platform.
 */
export declare class Destiny2GetDestinyManifest200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    /**
     * DestinyManifest is the external-facing contract for just the properties needed by those calling the Destiny Platform.
     */
    response?: shared.DestinyConfigDestinyManifest;
    throttleSeconds?: number;
}
export declare class Destiny2GetDestinyManifestResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
