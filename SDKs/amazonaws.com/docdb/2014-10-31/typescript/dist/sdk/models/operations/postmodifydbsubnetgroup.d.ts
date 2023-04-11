import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTModifyDBSubnetGroupActionEnum {
    ModifyDBSubnetGroup = "ModifyDBSubnetGroup"
}
export declare enum POSTModifyDBSubnetGroupVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class POSTModifyDBSubnetGroupRequest extends SpeakeasyBase {
    action: POSTModifyDBSubnetGroupActionEnum;
    requestBody?: Uint8Array;
    version: POSTModifyDBSubnetGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTModifyDBSubnetGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
