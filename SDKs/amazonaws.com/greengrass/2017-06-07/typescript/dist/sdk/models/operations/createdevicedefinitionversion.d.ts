import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateDeviceDefinitionVersionRequestBody extends SpeakeasyBase {
    /**
     * A list of devices in the definition version.
     */
    devices?: shared.Device[];
}
export declare class CreateDeviceDefinitionVersionRequest extends SpeakeasyBase {
    /**
     * The ID of the device definition.
     */
    deviceDefinitionId: string;
    requestBody: CreateDeviceDefinitionVersionRequestBody;
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
export declare class CreateDeviceDefinitionVersionResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    createDeviceDefinitionVersionResponse?: shared.CreateDeviceDefinitionVersionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
