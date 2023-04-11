import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETCreateDBSecurityGroupActionEnum {
    CreateDBSecurityGroup = "CreateDBSecurityGroup"
}
export declare enum GETCreateDBSecurityGroupVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}
export declare class GETCreateDBSecurityGroupRequest extends SpeakeasyBase {
    action: GETCreateDBSecurityGroupActionEnum;
    dbSecurityGroupDescription: string;
    dbSecurityGroupName: string;
    version: GETCreateDBSecurityGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETCreateDBSecurityGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
