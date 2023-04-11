import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListEnvironmentProvisionedResourcesXAmzTargetEnum {
    AwsProton20200720ListEnvironmentProvisionedResources = "AwsProton20200720.ListEnvironmentProvisionedResources"
}
export declare class ListEnvironmentProvisionedResourcesRequest extends SpeakeasyBase {
    listEnvironmentProvisionedResourcesInput: shared.ListEnvironmentProvisionedResourcesInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListEnvironmentProvisionedResourcesXAmzTargetEnum;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListEnvironmentProvisionedResourcesResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listEnvironmentProvisionedResourcesOutput?: shared.ListEnvironmentProvisionedResourcesOutput;
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
