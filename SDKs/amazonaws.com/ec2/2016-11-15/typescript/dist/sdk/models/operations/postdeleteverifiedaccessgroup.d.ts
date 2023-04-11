import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteVerifiedAccessGroupActionEnum {
    DeleteVerifiedAccessGroup = "DeleteVerifiedAccessGroup"
}
export declare enum POSTDeleteVerifiedAccessGroupVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDeleteVerifiedAccessGroupRequest extends SpeakeasyBase {
    action: POSTDeleteVerifiedAccessGroupActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteVerifiedAccessGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteVerifiedAccessGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
