import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Information about a core definition version.
 */
export declare class CreateCoreDefinitionRequestBodyInitialVersion extends SpeakeasyBase {
    cores?: shared.Core[];
}
export declare class CreateCoreDefinitionRequestBody extends SpeakeasyBase {
    /**
     * Information about a core definition version.
     */
    initialVersion?: CreateCoreDefinitionRequestBodyInitialVersion;
    /**
     * The name of the core definition.
     */
    name?: string;
    /**
     * The key-value pair for the resource tag.
     */
    tags?: Record<string, string>;
}
export declare class CreateCoreDefinitionRequest extends SpeakeasyBase {
    requestBody: CreateCoreDefinitionRequestBody;
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
export declare class CreateCoreDefinitionResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    createCoreDefinitionResponse?: shared.CreateCoreDefinitionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
