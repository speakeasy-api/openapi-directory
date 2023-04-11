import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTAssumeRoleWithWebIdentityActionEnum {
    AssumeRoleWithWebIdentity = "AssumeRoleWithWebIdentity"
}
export declare enum POSTAssumeRoleWithWebIdentityVersionEnum {
    TwoThousandAndEleven0615 = "2011-06-15"
}
export declare class POSTAssumeRoleWithWebIdentityRequest extends SpeakeasyBase {
    action: POSTAssumeRoleWithWebIdentityActionEnum;
    requestBody?: Uint8Array;
    version: POSTAssumeRoleWithWebIdentityVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTAssumeRoleWithWebIdentityResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
