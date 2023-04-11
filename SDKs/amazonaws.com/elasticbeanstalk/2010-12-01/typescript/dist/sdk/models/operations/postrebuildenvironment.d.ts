import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTRebuildEnvironmentActionEnum {
    RebuildEnvironment = "RebuildEnvironment"
}
export declare enum POSTRebuildEnvironmentVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class POSTRebuildEnvironmentRequest extends SpeakeasyBase {
    action: POSTRebuildEnvironmentActionEnum;
    requestBody?: Uint8Array;
    version: POSTRebuildEnvironmentVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTRebuildEnvironmentResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
