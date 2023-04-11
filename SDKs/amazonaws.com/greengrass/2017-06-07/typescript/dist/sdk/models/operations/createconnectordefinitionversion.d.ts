import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateConnectorDefinitionVersionRequestBody extends SpeakeasyBase {
    /**
     * A list of references to connectors in this version, with their corresponding configuration settings.
     */
    connectors?: shared.Connector[];
}
export declare class CreateConnectorDefinitionVersionRequest extends SpeakeasyBase {
    /**
     * The ID of the connector definition.
     */
    connectorDefinitionId: string;
    requestBody: CreateConnectorDefinitionVersionRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * A client token used to correlate requests and responses.
     */
    xAmznClientToken?: string;
}
export declare class CreateConnectorDefinitionVersionResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    createConnectorDefinitionVersionResponse?: shared.CreateConnectorDefinitionVersionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
