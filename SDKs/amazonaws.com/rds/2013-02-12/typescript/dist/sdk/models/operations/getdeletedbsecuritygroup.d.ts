import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteDBSecurityGroupActionEnum {
    DeleteDBSecurityGroup = "DeleteDBSecurityGroup"
}
export declare enum GETDeleteDBSecurityGroupVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}
export declare class GETDeleteDBSecurityGroupRequest extends SpeakeasyBase {
    action: GETDeleteDBSecurityGroupActionEnum;
    dbSecurityGroupName: string;
    version: GETDeleteDBSecurityGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteDBSecurityGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
