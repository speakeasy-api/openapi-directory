import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutJobFailureResultXAmzTargetEnum {
    CodePipeline20150709PutJobFailureResult = "CodePipeline_20150709.PutJobFailureResult"
}
export declare class PutJobFailureResultRequest extends SpeakeasyBase {
    putJobFailureResultInput: shared.PutJobFailureResultInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutJobFailureResultXAmzTargetEnum;
}
export declare class PutJobFailureResultResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidJobStateException
     */
    invalidJobStateException?: any;
    /**
     * JobNotFoundException
     */
    jobNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
