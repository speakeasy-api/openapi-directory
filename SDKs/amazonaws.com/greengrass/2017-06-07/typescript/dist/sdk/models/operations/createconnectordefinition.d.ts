import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Information about the connector definition version, which is a container for connectors.
 */
export declare class CreateConnectorDefinitionRequestBodyInitialVersion extends SpeakeasyBase {
    connectors?: shared.Connector[];
}
export declare class CreateConnectorDefinitionRequestBody extends SpeakeasyBase {
    /**
     * Information about the connector definition version, which is a container for connectors.
     */
    initialVersion?: CreateConnectorDefinitionRequestBodyInitialVersion;
    /**
     * The name of the connector definition.
     */
    name?: string;
    /**
     * The key-value pair for the resource tag.
     */
    tags?: Record<string, string>;
}
export declare class CreateConnectorDefinitionRequest extends SpeakeasyBase {
    requestBody: CreateConnectorDefinitionRequestBody;
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
export declare class CreateConnectorDefinitionResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    createConnectorDefinitionResponse?: shared.CreateConnectorDefinitionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
