import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTUpdateApplicationResourceLifecycleActionEnum {
    UpdateApplicationResourceLifecycle = "UpdateApplicationResourceLifecycle"
}
export declare enum POSTUpdateApplicationResourceLifecycleVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class POSTUpdateApplicationResourceLifecycleRequest extends SpeakeasyBase {
    action: POSTUpdateApplicationResourceLifecycleActionEnum;
    requestBody?: Uint8Array;
    version: POSTUpdateApplicationResourceLifecycleVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTUpdateApplicationResourceLifecycleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
