import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreatePlacementGroupActionEnum {
    CreatePlacementGroup = "CreatePlacementGroup"
}
export declare enum POSTCreatePlacementGroupVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTCreatePlacementGroupRequest extends SpeakeasyBase {
    action: POSTCreatePlacementGroupActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreatePlacementGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreatePlacementGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
