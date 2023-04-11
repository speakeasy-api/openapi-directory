import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTGetFlowLogsIntegrationTemplateActionEnum {
    GetFlowLogsIntegrationTemplate = "GetFlowLogsIntegrationTemplate"
}
export declare enum POSTGetFlowLogsIntegrationTemplateVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTGetFlowLogsIntegrationTemplateRequest extends SpeakeasyBase {
    action: POSTGetFlowLogsIntegrationTemplateActionEnum;
    requestBody?: Uint8Array;
    version: POSTGetFlowLogsIntegrationTemplateVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTGetFlowLogsIntegrationTemplateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
