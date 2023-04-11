import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribePrincipalMappingXAmzTargetEnum {
    AWSKendraFrontendServiceDescribePrincipalMapping = "AWSKendraFrontendService.DescribePrincipalMapping"
}
export declare class DescribePrincipalMappingRequest extends SpeakeasyBase {
    describePrincipalMappingRequest: shared.DescribePrincipalMappingRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribePrincipalMappingXAmzTargetEnum;
}
export declare class DescribePrincipalMappingResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    describePrincipalMappingResponse?: shared.DescribePrincipalMappingResponse;
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
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
