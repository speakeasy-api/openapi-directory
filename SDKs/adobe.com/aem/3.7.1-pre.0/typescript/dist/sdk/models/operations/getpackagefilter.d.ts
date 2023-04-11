import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetPackageFilterRequest extends SpeakeasyBase {
    group: string;
    name: string;
    version: string;
}
export declare class GetPackageFilterResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Default response
     */
    getPackageFilterDefaultApplicationJSONString?: string;
}
