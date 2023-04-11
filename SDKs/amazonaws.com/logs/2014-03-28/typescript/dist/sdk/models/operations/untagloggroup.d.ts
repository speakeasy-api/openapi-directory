import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UntagLogGroupXAmzTargetEnum {
    Logs20140328UntagLogGroup = "Logs_20140328.UntagLogGroup"
}
export declare class UntagLogGroupRequest extends SpeakeasyBase {
    untagLogGroupRequest: shared.UntagLogGroupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UntagLogGroupXAmzTargetEnum;
}
export declare class UntagLogGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
