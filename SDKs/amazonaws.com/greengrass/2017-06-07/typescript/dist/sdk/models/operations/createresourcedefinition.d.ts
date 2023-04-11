import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Information about a resource definition version.
 */
export declare class CreateResourceDefinitionRequestBodyInitialVersion extends SpeakeasyBase {
    resources?: shared.Resource[];
}
export declare class CreateResourceDefinitionRequestBody extends SpeakeasyBase {
    /**
     * Information about a resource definition version.
     */
    initialVersion?: CreateResourceDefinitionRequestBodyInitialVersion;
    /**
     * The name of the resource definition.
     */
    name?: string;
    /**
     * The key-value pair for the resource tag.
     */
    tags?: Record<string, string>;
}
export declare class CreateResourceDefinitionRequest extends SpeakeasyBase {
    requestBody: CreateResourceDefinitionRequestBody;
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
export declare class CreateResourceDefinitionResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    createResourceDefinitionResponse?: shared.CreateResourceDefinitionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
