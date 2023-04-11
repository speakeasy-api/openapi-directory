import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTAssociateInstanceEventWindowActionEnum {
    AssociateInstanceEventWindow = "AssociateInstanceEventWindow"
}
export declare enum POSTAssociateInstanceEventWindowVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTAssociateInstanceEventWindowRequest extends SpeakeasyBase {
    action: POSTAssociateInstanceEventWindowActionEnum;
    requestBody?: Uint8Array;
    version: POSTAssociateInstanceEventWindowVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTAssociateInstanceEventWindowResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
