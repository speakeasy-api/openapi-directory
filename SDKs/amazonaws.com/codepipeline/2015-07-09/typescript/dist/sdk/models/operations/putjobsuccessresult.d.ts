import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutJobSuccessResultXAmzTargetEnum {
    CodePipeline20150709PutJobSuccessResult = "CodePipeline_20150709.PutJobSuccessResult"
}
export declare class PutJobSuccessResultRequest extends SpeakeasyBase {
    putJobSuccessResultInput: shared.PutJobSuccessResultInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutJobSuccessResultXAmzTargetEnum;
}
export declare class PutJobSuccessResultResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidJobStateException
     */
    invalidJobStateException?: any;
    /**
     * JobNotFoundException
     */
    jobNotFoundException?: any;
    /**
     * OutputVariablesSizeExceededException
     */
    outputVariablesSizeExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
