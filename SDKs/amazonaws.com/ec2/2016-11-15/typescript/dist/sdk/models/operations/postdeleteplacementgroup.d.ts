import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeletePlacementGroupActionEnum {
    DeletePlacementGroup = "DeletePlacementGroup"
}
export declare enum POSTDeletePlacementGroupVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDeletePlacementGroupRequest extends SpeakeasyBase {
    action: POSTDeletePlacementGroupActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeletePlacementGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeletePlacementGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
