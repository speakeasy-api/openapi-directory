import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CompanyCreditsSearchallReadRequest extends SpeakeasyBase {
    param: string;
}
export declare class CompanyCreditsSearchallReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
