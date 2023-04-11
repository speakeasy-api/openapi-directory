import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetConnectorDefinitionRequest extends SpeakeasyBase {
    /**
     * The ID of the connector definition.
     */
    connectorDefinitionId: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetConnectorDefinitionResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    getConnectorDefinitionResponse?: shared.GetConnectorDefinitionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
