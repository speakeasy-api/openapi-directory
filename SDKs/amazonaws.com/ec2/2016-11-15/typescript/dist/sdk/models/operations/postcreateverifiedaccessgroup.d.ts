import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateVerifiedAccessGroupActionEnum {
    CreateVerifiedAccessGroup = "CreateVerifiedAccessGroup"
}
export declare enum POSTCreateVerifiedAccessGroupVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTCreateVerifiedAccessGroupRequest extends SpeakeasyBase {
    action: POSTCreateVerifiedAccessGroupActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateVerifiedAccessGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateVerifiedAccessGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
