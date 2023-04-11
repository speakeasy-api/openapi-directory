import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTExportTransitGatewayRoutesActionEnum {
    ExportTransitGatewayRoutes = "ExportTransitGatewayRoutes"
}
export declare enum POSTExportTransitGatewayRoutesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTExportTransitGatewayRoutesRequest extends SpeakeasyBase {
    action: POSTExportTransitGatewayRoutesActionEnum;
    requestBody?: Uint8Array;
    version: POSTExportTransitGatewayRoutesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTExportTransitGatewayRoutesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
