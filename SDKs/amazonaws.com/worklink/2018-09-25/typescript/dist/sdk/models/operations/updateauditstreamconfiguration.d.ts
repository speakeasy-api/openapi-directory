import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateAuditStreamConfigurationRequestBody extends SpeakeasyBase {
    /**
     * The ARN of the Amazon Kinesis data stream that receives the audit events.
     */
    auditStreamArn?: string;
    /**
     * The ARN of the fleet.
     */
    fleetArn: string;
}
export declare class UpdateAuditStreamConfigurationRequest extends SpeakeasyBase {
    requestBody: UpdateAuditStreamConfigurationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateAuditStreamConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerErrorException
     */
    internalServerErrorException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
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
    updateAuditStreamConfigurationResponse?: Record<string, any>;
}
