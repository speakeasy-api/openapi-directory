import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum TagResourceXAmzTargetEnum {
    CodeDeploy20141006TagResource = "CodeDeploy_20141006.TagResource"
}
export declare class TagResourceRequest extends SpeakeasyBase {
    tagResourceInput: shared.TagResourceInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: TagResourceXAmzTargetEnum;
}
export declare class TagResourceResponse extends SpeakeasyBase {
    /**
     * ApplicationDoesNotExistException
     */
    applicationDoesNotExistException?: any;
    /**
     * ArnNotSupportedException
     */
    arnNotSupportedException?: any;
    contentType: string;
    /**
     * DeploymentConfigDoesNotExistException
     */
    deploymentConfigDoesNotExistException?: any;
    /**
     * DeploymentGroupDoesNotExistException
     */
    deploymentGroupDoesNotExistException?: any;
    /**
     * InvalidArnException
     */
    invalidArnException?: any;
    /**
     * InvalidTagsToAddException
     */
    invalidTagsToAddException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceArnRequiredException
     */
    resourceArnRequiredException?: any;
    /**
     * TagRequiredException
     */
    tagRequiredException?: any;
    /**
     * Success
     */
    tagResourceOutput?: Record<string, any>;
}
