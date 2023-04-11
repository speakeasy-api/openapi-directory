import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteDBSubnetGroupActionEnum {
    DeleteDBSubnetGroup = "DeleteDBSubnetGroup"
}
export declare enum GETDeleteDBSubnetGroupVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}
export declare class GETDeleteDBSubnetGroupRequest extends SpeakeasyBase {
    action: GETDeleteDBSubnetGroupActionEnum;
    dbSubnetGroupName: string;
    version: GETDeleteDBSubnetGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteDBSubnetGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
