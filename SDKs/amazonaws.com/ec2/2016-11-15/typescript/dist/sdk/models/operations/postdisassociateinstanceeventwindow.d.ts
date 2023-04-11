import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDisassociateInstanceEventWindowActionEnum {
    DisassociateInstanceEventWindow = "DisassociateInstanceEventWindow"
}
export declare enum POSTDisassociateInstanceEventWindowVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDisassociateInstanceEventWindowRequest extends SpeakeasyBase {
    action: POSTDisassociateInstanceEventWindowActionEnum;
    requestBody?: Uint8Array;
    version: POSTDisassociateInstanceEventWindowVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDisassociateInstanceEventWindowResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
