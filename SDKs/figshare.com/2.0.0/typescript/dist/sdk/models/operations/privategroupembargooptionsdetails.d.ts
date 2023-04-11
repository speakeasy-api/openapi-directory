import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateGroupEmbargoOptionsDetailsSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateGroupEmbargoOptionsDetailsRequest extends SpeakeasyBase {
    /**
     * Group identifier
     */
    groupId: number;
}
export declare class PrivateGroupEmbargoOptionsDetailsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    /**
     * OK. An array of embargo options
     */
    groupEmbargoOptions?: shared.GroupEmbargoOptions[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
