import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTModifyInstanceMaintenanceOptionsActionEnum {
    ModifyInstanceMaintenanceOptions = "ModifyInstanceMaintenanceOptions"
}
export declare enum POSTModifyInstanceMaintenanceOptionsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTModifyInstanceMaintenanceOptionsRequest extends SpeakeasyBase {
    action: POSTModifyInstanceMaintenanceOptionsActionEnum;
    requestBody?: Uint8Array;
    version: POSTModifyInstanceMaintenanceOptionsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTModifyInstanceMaintenanceOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
