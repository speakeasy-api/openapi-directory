import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProjectUsernameProjectCheckoutKeyFingerprintRequest extends SpeakeasyBase {
    /**
     * XXXXXXXXXX
     *
     * @remarks
     *
     */
    fingerprint: string;
    /**
     * XXXXXXXXX
     *
     * @remarks
     *
     */
    project: string;
    /**
     * XXXXXXXXX
     *
     * @remarks
     *
     */
    username: string;
}
export declare class GetProjectUsernameProjectCheckoutKeyFingerprintResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * checkout key
     */
    key?: shared.Key;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
