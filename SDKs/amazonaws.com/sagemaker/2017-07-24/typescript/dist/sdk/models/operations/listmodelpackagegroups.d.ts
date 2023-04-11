import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListModelPackageGroupsXAmzTargetEnum {
    SageMakerListModelPackageGroups = "SageMaker.ListModelPackageGroups"
}
export declare class ListModelPackageGroupsRequest extends SpeakeasyBase {
    listModelPackageGroupsInput: shared.ListModelPackageGroupsInput;
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
    xAmzTarget: ListModelPackageGroupsXAmzTargetEnum;
}
export declare class ListModelPackageGroupsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listModelPackageGroupsOutput?: shared.ListModelPackageGroupsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
