import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeProblemXAmzTargetEnum {
    Ec2WindowsBarleyServiceDescribeProblem = "EC2WindowsBarleyService.DescribeProblem"
}
export declare class DescribeProblemRequest extends SpeakeasyBase {
    describeProblemRequest: shared.DescribeProblemRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeProblemXAmzTargetEnum;
}
export declare class DescribeProblemResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeProblemResponse?: shared.DescribeProblemResponse;
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
