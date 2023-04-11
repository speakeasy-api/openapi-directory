import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTModifyReservedInstancesActionEnum {
    ModifyReservedInstances = "ModifyReservedInstances"
}
export declare enum POSTModifyReservedInstancesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTModifyReservedInstancesRequest extends SpeakeasyBase {
    action: POSTModifyReservedInstancesActionEnum;
    requestBody?: Uint8Array;
    version: POSTModifyReservedInstancesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTModifyReservedInstancesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
