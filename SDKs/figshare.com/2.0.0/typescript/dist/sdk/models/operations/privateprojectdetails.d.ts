import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateProjectDetailsSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateProjectDetailsRequest extends SpeakeasyBase {
    /**
     * Project unique identifier
     */
    projectId: number;
}
export declare class PrivateProjectDetailsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    /**
     * OK. Project representation
     */
    projectCompletePrivate?: shared.ProjectCompletePrivate;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
