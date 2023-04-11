import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTPurchaseScheduledInstancesActionEnum {
    PurchaseScheduledInstances = "PurchaseScheduledInstances"
}
export declare enum POSTPurchaseScheduledInstancesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTPurchaseScheduledInstancesRequest extends SpeakeasyBase {
    action: POSTPurchaseScheduledInstancesActionEnum;
    requestBody?: Uint8Array;
    version: POSTPurchaseScheduledInstancesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTPurchaseScheduledInstancesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
