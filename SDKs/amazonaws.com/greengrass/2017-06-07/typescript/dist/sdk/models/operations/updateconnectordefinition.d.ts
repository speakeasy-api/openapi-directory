import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateConnectorDefinitionRequestBody extends SpeakeasyBase {
    /**
     * The name of the definition.
     */
    name?: string;
}
export declare class UpdateConnectorDefinitionRequest extends SpeakeasyBase {
    /**
     * The ID of the connector definition.
     */
    connectorDefinitionId: string;
    requestBody: UpdateConnectorDefinitionRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateConnectorDefinitionResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateConnectorDefinitionResponse?: Record<string, any>;
}
