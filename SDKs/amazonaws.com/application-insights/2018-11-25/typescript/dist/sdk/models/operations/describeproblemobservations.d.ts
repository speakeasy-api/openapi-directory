import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeProblemObservationsXAmzTargetEnum {
    Ec2WindowsBarleyServiceDescribeProblemObservations = "EC2WindowsBarleyService.DescribeProblemObservations"
}
export declare class DescribeProblemObservationsRequest extends SpeakeasyBase {
    describeProblemObservationsRequest: shared.DescribeProblemObservationsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeProblemObservationsXAmzTargetEnum;
}
export declare class DescribeProblemObservationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeProblemObservationsResponse?: shared.DescribeProblemObservationsResponse;
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
