import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTPurchaseReservedDBInstancesOfferingActionEnum {
    PurchaseReservedDBInstancesOffering = "PurchaseReservedDBInstancesOffering"
}
export declare enum POSTPurchaseReservedDBInstancesOfferingVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
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
