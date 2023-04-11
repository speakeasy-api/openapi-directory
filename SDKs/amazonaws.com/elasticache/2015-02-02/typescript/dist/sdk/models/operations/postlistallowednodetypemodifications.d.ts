import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTListAllowedNodeTypeModificationsActionEnum {
    ListAllowedNodeTypeModifications = "ListAllowedNodeTypeModifications"
}
export declare enum POSTListAllowedNodeTypeModificationsVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class POSTListAllowedNodeTypeModificationsRequest extends SpeakeasyBase {
    action: POSTListAllowedNodeTypeModificationsActionEnum;
    requestBody?: Uint8Array;
    version: POSTListAllowedNodeTypeModificationsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTListAllowedNodeTypeModificationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
