import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListReplaysXAmzTargetEnum {
    AWSEventsListReplays = "AWSEvents.ListReplays"
}
export declare class ListReplaysRequest extends SpeakeasyBase {
    listReplaysRequest: shared.ListReplaysRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListReplaysXAmzTargetEnum;
}
export declare class ListReplaysResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * Success
     */
    listReplaysResponse?: shared.ListReplaysResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
