import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RequestThirdPartyDependenciesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Not Acceptable
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    thirdPartyDependenciesData?: shared.ThirdPartyDependenciesData[];
}
