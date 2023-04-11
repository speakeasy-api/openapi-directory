import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETAbortEnvironmentUpdateActionEnum {
    AbortEnvironmentUpdate = "AbortEnvironmentUpdate"
}
export declare enum GETAbortEnvironmentUpdateVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GETAbortEnvironmentUpdateRequest extends SpeakeasyBase {
    action: GETAbortEnvironmentUpdateActionEnum;
    /**
     * This specifies the ID of the environment with the in-progress update that you want to cancel.
     */
    environmentId?: string;
    /**
     * This specifies the name of the environment with the in-progress update that you want to cancel.
     */
    environmentName?: string;
    version: GETAbortEnvironmentUpdateVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETAbortEnvironmentUpdateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
