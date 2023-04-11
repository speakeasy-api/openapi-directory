import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RequestListOfEventTypesForTenantRequest extends SpeakeasyBase {
    /**
     * Service Authentication token
     */
    xSdsServiceToken?: string;
}
export declare class RequestListOfEventTypesForTenantResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * OK
     */
    eventTypeList?: shared.EventTypeList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
