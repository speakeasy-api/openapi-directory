import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CompanyCreditsSearchReadRequest extends SpeakeasyBase {
    movieTitle: string;
}
export declare class CompanyCreditsSearchReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
