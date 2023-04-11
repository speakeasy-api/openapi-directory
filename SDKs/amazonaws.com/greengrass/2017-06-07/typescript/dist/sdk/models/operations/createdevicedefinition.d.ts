import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Information about a device definition version.
 */
export declare class CreateDeviceDefinitionRequestBodyInitialVersion extends SpeakeasyBase {
    devices?: shared.Device[];
}
export declare class CreateDeviceDefinitionRequestBody extends SpeakeasyBase {
    /**
     * Information about a device definition version.
     */
    initialVersion?: CreateDeviceDefinitionRequestBodyInitialVersion;
    /**
     * The name of the device definition.
     */
    name?: string;
    /**
     * The key-value pair for the resource tag.
     */
    tags?: Record<string, string>;
}
export declare class CreateDeviceDefinitionRequest extends SpeakeasyBase {
    requestBody: CreateDeviceDefinitionRequestBody;
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
export declare class CreateDeviceDefinitionResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    createDeviceDefinitionResponse?: shared.CreateDeviceDefinitionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
