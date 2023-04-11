import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeProjectRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     *  Unique project identifier.
     */
    projectId: string;
    /**
     *  If set to true, causes AWS Mobile Hub to synchronize information from other services, e.g., update state of AWS CloudFormation stacks in the AWS Mobile Hub project.
     */
    syncFromResources?: boolean;
}
export declare class DescribeProjectResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: shared.BadRequestException;
    contentType: string;
    /**
     * Success
     */
    describeProjectResult?: shared.DescribeProjectResult;
    /**
     * InternalFailureException
     */
    internalFailureException?: shared.InternalFailureException;
    /**
     * NotFoundException
     */
    notFoundException?: shared.NotFoundException;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: shared.ServiceUnavailableException;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: shared.TooManyRequestsException;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: shared.UnauthorizedException;
}
