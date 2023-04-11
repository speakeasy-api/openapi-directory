import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateNetworkAclActionEnum {
    CreateNetworkAcl = "CreateNetworkAcl"
}
export declare enum POSTCreateNetworkAclVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTCreateNetworkAclRequest extends SpeakeasyBase {
    action: POSTCreateNetworkAclActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateNetworkAclVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateNetworkAclResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
