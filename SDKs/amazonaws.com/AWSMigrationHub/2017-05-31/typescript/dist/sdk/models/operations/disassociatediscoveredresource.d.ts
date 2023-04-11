import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DisassociateDiscoveredResourceXAmzTargetEnum {
    AWSMigrationHubDisassociateDiscoveredResource = "AWSMigrationHub.DisassociateDiscoveredResource"
}
export declare class DisassociateDiscoveredResourceRequest extends SpeakeasyBase {
    disassociateDiscoveredResourceRequest: shared.DisassociateDiscoveredResourceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateDiscoveredResourceXAmzTargetEnum;
}
export declare class DisassociateDiscoveredResourceResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    disassociateDiscoveredResourceResult?: Record<string, any>;
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
