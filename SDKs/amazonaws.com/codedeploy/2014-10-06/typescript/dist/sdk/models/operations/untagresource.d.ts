import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UntagResourceXAmzTargetEnum {
    CodeDeploy20141006UntagResource = "CodeDeploy_20141006.UntagResource"
}
export declare class UntagResourceRequest extends SpeakeasyBase {
    untagResourceInput: shared.UntagResourceInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UntagResourceXAmzTargetEnum;
}
export declare class UntagResourceResponse extends SpeakeasyBase {
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
    untagResourceOutput?: Record<string, any>;
}
