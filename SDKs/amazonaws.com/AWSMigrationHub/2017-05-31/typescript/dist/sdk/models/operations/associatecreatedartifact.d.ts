import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AssociateCreatedArtifactXAmzTargetEnum {
    AWSMigrationHubAssociateCreatedArtifact = "AWSMigrationHub.AssociateCreatedArtifact"
}
export declare class AssociateCreatedArtifactRequest extends SpeakeasyBase {
    associateCreatedArtifactRequest: shared.AssociateCreatedArtifactRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateCreatedArtifactXAmzTargetEnum;
}
export declare class AssociateCreatedArtifactResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * Success
     */
    associateCreatedArtifactResult?: Record<string, any>;
    contentType: string;
    /**
     * DryRunOperation
     */
    dryRunOperation?: any;
    /**
     * HomeRegionNotSetException
     */
    homeRegionNotSetException?: any;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * UnauthorizedOperation
     */
    unauthorizedOperation?: any;
}
