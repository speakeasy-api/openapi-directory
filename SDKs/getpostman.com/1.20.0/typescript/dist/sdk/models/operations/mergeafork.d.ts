import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class MergeAForkRequestBody extends SpeakeasyBase {
    destination?: string;
    source?: string;
    strategy?: string;
}
export declare class MergeAForkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
