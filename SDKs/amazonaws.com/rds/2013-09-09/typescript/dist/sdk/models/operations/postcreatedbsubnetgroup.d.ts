import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateDBSubnetGroupActionEnum {
    CreateDBSubnetGroup = "CreateDBSubnetGroup"
}
export declare enum POSTCreateDBSubnetGroupVersionEnum {
    TwoThousandAndThirteen0909 = "2013-09-09"
}
export declare class POSTCreateDBSubnetGroupRequest extends SpeakeasyBase {
    action: POSTCreateDBSubnetGroupActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateDBSubnetGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateDBSubnetGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
