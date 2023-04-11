import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CheckSchemaVersionValidityXAmzTargetEnum {
    AWSGlueCheckSchemaVersionValidity = "AWSGlue.CheckSchemaVersionValidity"
}
export declare class CheckSchemaVersionValidityRequest extends SpeakeasyBase {
    checkSchemaVersionValidityInput: shared.CheckSchemaVersionValidityInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CheckSchemaVersionValidityXAmzTargetEnum;
}
export declare class CheckSchemaVersionValidityResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * Success
     */
    checkSchemaVersionValidityResponse?: shared.CheckSchemaVersionValidityResponse;
    contentType: string;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
