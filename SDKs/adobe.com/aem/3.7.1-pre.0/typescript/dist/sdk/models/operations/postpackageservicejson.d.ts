import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostPackageServiceJsonRequestBodyPackage extends SpeakeasyBase {
    content: Uint8Array;
    package: string;
}
export declare class PostPackageServiceJsonRequestBody extends SpeakeasyBase {
    package?: PostPackageServiceJsonRequestBodyPackage;
}
export declare class PostPackageServiceJsonRequest extends SpeakeasyBase {
    requestBody?: PostPackageServiceJsonRequestBody;
    charset?: string;
    cmd: string;
    force?: boolean;
    groupName?: string;
    packageName?: string;
    packageVersion?: string;
    path: string;
    recursive?: boolean;
}
export declare class PostPackageServiceJsonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Default response
     */
    postPackageServiceJSONDefaultApplicationJSONString?: string;
}
