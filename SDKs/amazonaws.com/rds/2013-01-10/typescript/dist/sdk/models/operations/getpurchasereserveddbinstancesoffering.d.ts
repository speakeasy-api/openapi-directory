import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETPurchaseReservedDBInstancesOfferingActionEnum {
    PurchaseReservedDBInstancesOffering = "PurchaseReservedDBInstancesOffering"
}
export declare enum GETPurchaseReservedDBInstancesOfferingVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class GETPurchaseReservedDBInstancesOfferingRequest extends SpeakeasyBase {
    action: GETPurchaseReservedDBInstancesOfferingActionEnum;
    dbInstanceCount?: number;
    reservedDBInstanceId?: string;
    reservedDBInstancesOfferingId: string;
    version: GETPurchaseReservedDBInstancesOfferingVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETPurchaseReservedDBInstancesOfferingResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
