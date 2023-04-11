import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateWebACLMigrationStackXAmzTargetEnum {
    AWSWAF20150824CreateWebACLMigrationStack = "AWSWAF_20150824.CreateWebACLMigrationStack"
}
export declare class CreateWebACLMigrationStackRequest extends SpeakeasyBase {
    createWebACLMigrationStackRequest: shared.CreateWebACLMigrationStackRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateWebACLMigrationStackXAmzTargetEnum;
}
export declare class CreateWebACLMigrationStackResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createWebACLMigrationStackResponse?: shared.CreateWebACLMigrationStackResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * WAFEntityMigrationException
     */
    wafEntityMigrationException?: any;
    /**
     * WAFInternalErrorException
     */
    wafInternalErrorException?: any;
    /**
     * WAFInvalidOperationException
     */
    wafInvalidOperationException?: any;
    /**
     * WAFInvalidParameterException
     */
    wafInvalidParameterException?: any;
    /**
     * WAFNonexistentItemException
     */
    wafNonexistentItemException?: any;
}
