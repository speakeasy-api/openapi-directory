import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTModifyVerifiedAccessGroupActionEnum {
    ModifyVerifiedAccessGroup = "ModifyVerifiedAccessGroup"
}
export declare enum POSTModifyVerifiedAccessGroupVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTModifyVerifiedAccessGroupRequest extends SpeakeasyBase {
    action: POSTModifyVerifiedAccessGroupActionEnum;
    requestBody?: Uint8Array;
    version: POSTModifyVerifiedAccessGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTModifyVerifiedAccessGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
