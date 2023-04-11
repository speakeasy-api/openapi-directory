import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateSecurityGroupActionEnum {
    CreateSecurityGroup = "CreateSecurityGroup"
}
export declare enum POSTCreateSecurityGroupVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTCreateSecurityGroupRequest extends SpeakeasyBase {
    action: POSTCreateSecurityGroupActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateSecurityGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateSecurityGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
