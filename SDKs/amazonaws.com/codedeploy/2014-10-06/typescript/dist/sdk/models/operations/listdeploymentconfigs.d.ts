import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListDeploymentConfigsXAmzTargetEnum {
    CodeDeploy20141006ListDeploymentConfigs = "CodeDeploy_20141006.ListDeploymentConfigs"
}
export declare class ListDeploymentConfigsRequest extends SpeakeasyBase {
    listDeploymentConfigsInput: shared.ListDeploymentConfigsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListDeploymentConfigsXAmzTargetEnum;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListDeploymentConfigsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * Success
     */
    listDeploymentConfigsOutput?: shared.ListDeploymentConfigsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
