import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AddTagsToOnPremisesInstancesXAmzTargetEnum {
    CodeDeploy20141006AddTagsToOnPremisesInstances = "CodeDeploy_20141006.AddTagsToOnPremisesInstances"
}
export declare class AddTagsToOnPremisesInstancesRequest extends SpeakeasyBase {
    addTagsToOnPremisesInstancesInput: shared.AddTagsToOnPremisesInstancesInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AddTagsToOnPremisesInstancesXAmzTargetEnum;
}
export declare class AddTagsToOnPremisesInstancesResponse extends SpeakeasyBase {
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
