import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteSubnetActionEnum {
    DeleteSubnet = "DeleteSubnet"
}
export declare enum POSTDeleteSubnetVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDeleteSubnetRequest extends SpeakeasyBase {
    action: POSTDeleteSubnetActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteSubnetVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteSubnetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
