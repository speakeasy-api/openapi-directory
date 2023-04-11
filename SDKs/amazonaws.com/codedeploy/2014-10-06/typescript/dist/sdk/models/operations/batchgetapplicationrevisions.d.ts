import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchGetApplicationRevisionsXAmzTargetEnum {
    CodeDeploy20141006BatchGetApplicationRevisions = "CodeDeploy_20141006.BatchGetApplicationRevisions"
}
export declare class BatchGetApplicationRevisionsRequest extends SpeakeasyBase {
    batchGetApplicationRevisionsInput: shared.BatchGetApplicationRevisionsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchGetApplicationRevisionsXAmzTargetEnum;
}
export declare class BatchGetApplicationRevisionsResponse extends SpeakeasyBase {
    /**
     * ApplicationDoesNotExistException
     */
    applicationDoesNotExistException?: any;
    /**
     * ApplicationNameRequiredException
     */
    applicationNameRequiredException?: any;
    /**
     * Success
     */
    batchGetApplicationRevisionsOutput?: shared.BatchGetApplicationRevisionsOutput;
    /**
     * BatchLimitExceededException
     */
    batchLimitExceededException?: any;
    contentType: string;
    /**
     * InvalidApplicationNameException
     */
    invalidApplicationNameException?: any;
    /**
     * InvalidRevisionException
     */
    invalidRevisionException?: any;
    /**
     * RevisionRequiredException
     */
    revisionRequiredException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
