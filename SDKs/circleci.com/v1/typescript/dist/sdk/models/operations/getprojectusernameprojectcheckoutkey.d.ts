import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProjectUsernameProjectCheckoutKeyRequest extends SpeakeasyBase {
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
export declare class GetProjectUsernameProjectCheckoutKeyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * checkout keys
     */
    keys?: shared.Key[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
