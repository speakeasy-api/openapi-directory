import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTAssumeRoleWithSAMLActionEnum {
    AssumeRoleWithSAML = "AssumeRoleWithSAML"
}
export declare enum POSTAssumeRoleWithSAMLVersionEnum {
    TwoThousandAndEleven0615 = "2011-06-15"
}
export declare class POSTAssumeRoleWithSAMLRequest extends SpeakeasyBase {
    action: POSTAssumeRoleWithSAMLActionEnum;
    requestBody?: Uint8Array;
    version: POSTAssumeRoleWithSAMLVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTAssumeRoleWithSAMLResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
