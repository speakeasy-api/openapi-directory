import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeObservationXAmzTargetEnum {
    Ec2WindowsBarleyServiceDescribeObservation = "EC2WindowsBarleyService.DescribeObservation"
}
export declare class DescribeObservationRequest extends SpeakeasyBase {
    describeObservationRequest: shared.DescribeObservationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeObservationXAmzTargetEnum;
}
export declare class DescribeObservationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeObservationResponse?: shared.DescribeObservationResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
