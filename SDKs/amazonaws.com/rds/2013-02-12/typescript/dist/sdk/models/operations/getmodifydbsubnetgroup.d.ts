import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETModifyDBSubnetGroupActionEnum {
    ModifyDBSubnetGroup = "ModifyDBSubnetGroup"
}
export declare enum GETModifyDBSubnetGroupVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}
export declare class GETModifyDBSubnetGroupRequest extends SpeakeasyBase {
    action: GETModifyDBSubnetGroupActionEnum;
    dbSubnetGroupDescription?: string;
    dbSubnetGroupName: string;
    subnetIds: string[];
    version: GETModifyDBSubnetGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETModifyDBSubnetGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
