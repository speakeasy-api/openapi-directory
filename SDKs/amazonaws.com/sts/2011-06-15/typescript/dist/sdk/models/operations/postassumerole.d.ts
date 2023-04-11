import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTAssumeRoleActionEnum {
    AssumeRole = "AssumeRole"
}
export declare enum POSTAssumeRoleVersionEnum {
    TwoThousandAndEleven0615 = "2011-06-15"
}
export declare class POSTAssumeRoleRequest extends SpeakeasyBase {
    action: POSTAssumeRoleActionEnum;
    requestBody?: Uint8Array;
    version: POSTAssumeRoleVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTAssumeRoleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
