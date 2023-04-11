import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetNamespaceYearsRequest extends SpeakeasyBase {
    /**
     * Namespace to fetch data for
     */
    namespace: string;
}
export declare class GetNamespaceYearsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    yearData?: shared.YearData;
}
