import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETCreateDBSubnetGroupActionEnum {
    CreateDBSubnetGroup = "CreateDBSubnetGroup"
}
export declare enum GETCreateDBSubnetGroupVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class GETCreateDBSubnetGroupRequest extends SpeakeasyBase {
    action: GETCreateDBSubnetGroupActionEnum;
    dbSubnetGroupDescription: string;
    dbSubnetGroupName: string;
    subnetIds: string[];
    version: GETCreateDBSubnetGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETCreateDBSubnetGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
