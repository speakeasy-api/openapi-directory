import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AddInstanceGroupsXAmzTargetEnum {
    ElasticMapReduceAddInstanceGroups = "ElasticMapReduce.AddInstanceGroups"
}
export declare class AddInstanceGroupsRequest extends SpeakeasyBase {
    addInstanceGroupsInput: shared.AddInstanceGroupsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AddInstanceGroupsXAmzTargetEnum;
}
export declare class AddInstanceGroupsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    addInstanceGroupsOutput?: shared.AddInstanceGroupsOutput;
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
