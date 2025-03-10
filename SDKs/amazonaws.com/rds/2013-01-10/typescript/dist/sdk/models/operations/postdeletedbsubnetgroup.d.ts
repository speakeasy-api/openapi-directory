import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteDBSubnetGroupActionEnum {
    DeleteDBSubnetGroup = "DeleteDBSubnetGroup"
}
export declare enum POSTDeleteDBSubnetGroupVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class POSTDeleteDBSubnetGroupRequest extends SpeakeasyBase {
    action: POSTDeleteDBSubnetGroupActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteDBSubnetGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteDBSubnetGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
