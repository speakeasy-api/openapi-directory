import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListApplicationRevisionsXAmzTargetEnum {
    CodeDeploy20141006ListApplicationRevisions = "CodeDeploy_20141006.ListApplicationRevisions"
}
export declare class ListApplicationRevisionsRequest extends SpeakeasyBase {
    listApplicationRevisionsInput: shared.ListApplicationRevisionsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListApplicationRevisionsXAmzTargetEnum;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListApplicationRevisionsResponse extends SpeakeasyBase {
    /**
     * ApplicationDoesNotExistException
     */
    applicationDoesNotExistException?: any;
    /**
     * ApplicationNameRequiredException
     */
    applicationNameRequiredException?: any;
    /**
     * BucketNameFilterRequiredException
     */
    bucketNameFilterRequiredException?: any;
    contentType: string;
    /**
     * InvalidApplicationNameException
     */
    invalidApplicationNameException?: any;
    /**
     * InvalidBucketNameFilterException
     */
    invalidBucketNameFilterException?: any;
    /**
     * InvalidDeployedStateFilterException
     */
    invalidDeployedStateFilterException?: any;
    /**
     * InvalidKeyPrefixFilterException
     */
    invalidKeyPrefixFilterException?: any;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * InvalidSortByException
     */
    invalidSortByException?: any;
    /**
     * InvalidSortOrderException
     */
    invalidSortOrderException?: any;
    /**
     * Success
     */
    listApplicationRevisionsOutput?: shared.ListApplicationRevisionsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
