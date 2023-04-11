import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ModifyClusterXAmzTargetEnum {
    ElasticMapReduceModifyCluster = "ElasticMapReduce.ModifyCluster"
}
export declare class ModifyClusterRequest extends SpeakeasyBase {
    modifyClusterInput: shared.ModifyClusterInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ModifyClusterXAmzTargetEnum;
}
export declare class ModifyClusterResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    modifyClusterOutput?: shared.ModifyClusterOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
