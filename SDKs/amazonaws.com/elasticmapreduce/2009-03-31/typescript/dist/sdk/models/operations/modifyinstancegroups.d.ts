import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ModifyInstanceGroupsXAmzTargetEnum {
    ElasticMapReduceModifyInstanceGroups = "ElasticMapReduce.ModifyInstanceGroups"
}
export declare class ModifyInstanceGroupsRequest extends SpeakeasyBase {
    modifyInstanceGroupsInput: shared.ModifyInstanceGroupsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ModifyInstanceGroupsXAmzTargetEnum;
}
export declare class ModifyInstanceGroupsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
