import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetVariablesRequest extends SpeakeasyBase {
    /**
     * The chargestation id
     */
    id: string;
}
export declare class GetVariablesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
