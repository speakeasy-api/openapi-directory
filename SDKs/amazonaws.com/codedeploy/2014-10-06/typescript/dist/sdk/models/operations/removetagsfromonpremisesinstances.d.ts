import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RemoveTagsFromOnPremisesInstancesXAmzTargetEnum {
    CodeDeploy20141006RemoveTagsFromOnPremisesInstances = "CodeDeploy_20141006.RemoveTagsFromOnPremisesInstances"
}
export declare class RemoveTagsFromOnPremisesInstancesRequest extends SpeakeasyBase {
    removeTagsFromOnPremisesInstancesInput: shared.RemoveTagsFromOnPremisesInstancesInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RemoveTagsFromOnPremisesInstancesXAmzTargetEnum;
}
export declare class RemoveTagsFromOnPremisesInstancesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InstanceLimitExceededException
     */
    instanceLimitExceededException?: any;
    /**
     * InstanceNameRequiredException
     */
    instanceNameRequiredException?: any;
    /**
     * InstanceNotRegisteredException
     */
    instanceNotRegisteredException?: any;
    /**
     * InvalidInstanceNameException
     */
    invalidInstanceNameException?: any;
    /**
     * InvalidTagException
     */
    invalidTagException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TagLimitExceededException
     */
    tagLimitExceededException?: any;
    /**
     * TagRequiredException
     */
    tagRequiredException?: any;
}
