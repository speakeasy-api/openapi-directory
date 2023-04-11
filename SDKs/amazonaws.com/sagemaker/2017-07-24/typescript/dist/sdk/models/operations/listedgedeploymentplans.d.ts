import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListEdgeDeploymentPlansXAmzTargetEnum {
    SageMakerListEdgeDeploymentPlans = "SageMaker.ListEdgeDeploymentPlans"
}
export declare class ListEdgeDeploymentPlansRequest extends SpeakeasyBase {
    listEdgeDeploymentPlansRequest: shared.ListEdgeDeploymentPlansRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListEdgeDeploymentPlansXAmzTargetEnum;
}
export declare class ListEdgeDeploymentPlansResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listEdgeDeploymentPlansResponse?: shared.ListEdgeDeploymentPlansResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
