import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Remote stop transaction info here.
 */
export declare class RemotestopRequestBody extends SpeakeasyBase {
    chargestation?: string;
    driver?: string;
    transaction?: string;
}
export declare class RemotestopResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
