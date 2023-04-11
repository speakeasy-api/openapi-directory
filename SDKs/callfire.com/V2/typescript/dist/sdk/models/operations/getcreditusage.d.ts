import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCreditUsageSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class GetCreditUsageRequest extends SpeakeasyBase {
    /**
     * Beginning of usage period formatted in unix time milliseconds. Example: 1473781817000
     */
    intervalBegin?: number;
    /**
     * End of usage period formatted in unix time milliseconds. Example: 1473781817000
     */
    intervalEnd?: number;
}
export declare class GetCreditUsageResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * successful operation
     */
    creditUsage?: shared.CreditUsage;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
