import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateShardCountXAmzTargetEnum {
    Kinesis20131202UpdateShardCount = "Kinesis_20131202.UpdateShardCount"
}
export declare class UpdateShardCountRequest extends SpeakeasyBase {
    updateShardCountInput: shared.UpdateShardCountInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateShardCountXAmzTargetEnum;
}
export declare class UpdateShardCountResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InvalidArgumentException
     */
    invalidArgumentException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    updateShardCountOutput?: shared.UpdateShardCountOutput;
    /**
     * ValidationException
     */
    validationException?: any;
}
