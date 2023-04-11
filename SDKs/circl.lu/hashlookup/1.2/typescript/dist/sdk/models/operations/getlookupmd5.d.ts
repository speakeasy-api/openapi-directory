import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetLookupMd5Request extends SpeakeasyBase {
    md5: string;
}
export declare class GetLookupMd5Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
