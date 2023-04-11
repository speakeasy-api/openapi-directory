import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostPackageUpdateRequest extends SpeakeasyBase {
    charset?: string;
    filter?: string;
    groupName: string;
    packageName: string;
    path: string;
    version: string;
}
export declare class PostPackageUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Default response
     */
    postPackageUpdateDefaultApplicationJSONString?: string;
}
