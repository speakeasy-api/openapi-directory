import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutParameterXAmzTargetEnum {
    AmazonSSMPutParameter = "AmazonSSM.PutParameter"
}
export declare class PutParameterRequest extends SpeakeasyBase {
    putParameterRequest: shared.PutParameterRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutParameterXAmzTargetEnum;
}
export declare class PutParameterResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * HierarchyLevelLimitExceededException
     */
    hierarchyLevelLimitExceededException?: any;
    /**
     * HierarchyTypeMismatchException
     */
    hierarchyTypeMismatchException?: any;
    /**
     * IncompatiblePolicyException
     */
    incompatiblePolicyException?: any;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidAllowedPatternException
     */
    invalidAllowedPatternException?: any;
    /**
     * InvalidKeyId
     */
    invalidKeyId?: any;
    /**
     * InvalidPolicyAttributeException
     */
    invalidPolicyAttributeException?: any;
    /**
     * InvalidPolicyTypeException
     */
    invalidPolicyTypeException?: any;
    /**
     * ParameterAlreadyExists
     */
    parameterAlreadyExists?: any;
    /**
     * ParameterLimitExceeded
     */
    parameterLimitExceeded?: any;
    /**
     * ParameterMaxVersionLimitExceeded
     */
    parameterMaxVersionLimitExceeded?: any;
    /**
     * ParameterPatternMismatchException
     */
    parameterPatternMismatchException?: any;
    /**
     * PoliciesLimitExceededException
     */
    policiesLimitExceededException?: any;
    /**
     * Success
     */
    putParameterResult?: shared.PutParameterResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyUpdates
     */
    tooManyUpdates?: any;
    /**
     * UnsupportedParameterType
     */
    unsupportedParameterType?: any;
}
