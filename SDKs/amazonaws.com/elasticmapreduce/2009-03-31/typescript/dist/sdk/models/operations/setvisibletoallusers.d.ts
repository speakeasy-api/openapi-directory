import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum SetVisibleToAllUsersXAmzTargetEnum {
    ElasticMapReduceSetVisibleToAllUsers = "ElasticMapReduce.SetVisibleToAllUsers"
}
export declare class SetVisibleToAllUsersRequest extends SpeakeasyBase {
    setVisibleToAllUsersInput: shared.SetVisibleToAllUsersInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SetVisibleToAllUsersXAmzTargetEnum;
}
export declare class SetVisibleToAllUsersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
