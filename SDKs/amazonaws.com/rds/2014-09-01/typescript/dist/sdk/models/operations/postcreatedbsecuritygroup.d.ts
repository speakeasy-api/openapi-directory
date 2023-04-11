import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateDBSecurityGroupActionEnum {
    CreateDBSecurityGroup = "CreateDBSecurityGroup"
}
export declare enum POSTCreateDBSecurityGroupVersionEnum {
    TwoThousandAndFourteen0901 = "2014-09-01"
}
export declare class POSTCreateDBSecurityGroupRequest extends SpeakeasyBase {
    action: POSTCreateDBSecurityGroupActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateDBSecurityGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateDBSecurityGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
