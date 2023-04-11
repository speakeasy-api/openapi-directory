import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Contains a gateway's platform information.
 */
export declare class CreateGatewayRequestBodyGatewayPlatform extends SpeakeasyBase {
    greengrass?: shared.Greengrass;
    greengrassV2?: shared.GreengrassV2;
}
export declare class CreateGatewayRequestBody extends SpeakeasyBase {
    /**
     * A unique, friendly name for the gateway.
     */
    gatewayName: string;
    /**
     * Contains a gateway's platform information.
     */
    gatewayPlatform: CreateGatewayRequestBodyGatewayPlatform;
    /**
     * A list of key-value pairs that contain metadata for the gateway. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise resources</a> in the <i>IoT SiteWise User Guide</i>.
     */
    tags?: Record<string, string>;
}
export declare class CreateGatewayRequest extends SpeakeasyBase {
    requestBody: CreateGatewayRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateGatewayResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createGatewayResponse?: shared.CreateGatewayResponse;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
