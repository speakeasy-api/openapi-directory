import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateProjectLeaveSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateProjectLeaveRequest extends SpeakeasyBase {
    /**
     * Project unique identifier
     */
    projectId: number;
}
export declare class PrivateProjectLeaveResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
