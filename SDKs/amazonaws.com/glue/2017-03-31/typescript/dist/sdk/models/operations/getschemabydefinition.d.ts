import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetSchemaByDefinitionXAmzTargetEnum {
    AWSGlueGetSchemaByDefinition = "AWSGlue.GetSchemaByDefinition"
}
export declare class GetSchemaByDefinitionRequest extends SpeakeasyBase {
    getSchemaByDefinitionInput: shared.GetSchemaByDefinitionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetSchemaByDefinitionXAmzTargetEnum;
}
export declare class GetSchemaByDefinitionResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * Success
     */
    getSchemaByDefinitionResponse?: shared.GetSchemaByDefinitionResponse;
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
