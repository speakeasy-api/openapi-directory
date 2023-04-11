import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The target capacity for the connector. The capacity can be auto scaled or provisioned.
 */
export declare class UpdateConnectorRequestBodyCapacity extends SpeakeasyBase {
    autoScaling?: shared.AutoScalingUpdate;
    provisionedCapacity?: shared.ProvisionedCapacityUpdate;
}
export declare class UpdateConnectorRequestBody extends SpeakeasyBase {
    /**
     * The target capacity for the connector. The capacity can be auto scaled or provisioned.
     */
    capacity: UpdateConnectorRequestBodyCapacity;
}
export declare class UpdateConnectorRequest extends SpeakeasyBase {
    requestBody: UpdateConnectorRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The Amazon Resource Name (ARN) of the connector that you want to update.
     */
    connectorArn: string;
    /**
     * The current version of the connector that you want to update.
     */
    currentVersion: string;
}
export declare class UpdateConnectorResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * ForbiddenException
     */
    forbiddenException?: any;
    /**
     * InternalServerErrorException
     */
    internalServerErrorException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
    /**
     * Success
     */
    updateConnectorResponse?: shared.UpdateConnectorResponse;
}
