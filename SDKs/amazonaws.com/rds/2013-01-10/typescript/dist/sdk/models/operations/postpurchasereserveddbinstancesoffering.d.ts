import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTPurchaseReservedDBInstancesOfferingActionEnum {
    PurchaseReservedDBInstancesOffering = "PurchaseReservedDBInstancesOffering"
}
export declare enum POSTPurchaseReservedDBInstancesOfferingVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class POSTPurchaseReservedDBInstancesOfferingRequest extends SpeakeasyBase {
    action: POSTPurchaseReservedDBInstancesOfferingActionEnum;
    requestBody?: Uint8Array;
    version: POSTPurchaseReservedDBInstancesOfferingVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTPurchaseReservedDBInstancesOfferingResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
