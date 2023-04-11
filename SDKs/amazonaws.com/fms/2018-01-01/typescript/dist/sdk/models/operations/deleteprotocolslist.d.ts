import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteProtocolsListXAmzTargetEnum {
    AWSFMS20180101DeleteProtocolsList = "AWSFMS_20180101.DeleteProtocolsList"
}
export declare class DeleteProtocolsListRequest extends SpeakeasyBase {
    deleteProtocolsListRequest: shared.DeleteProtocolsListRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteProtocolsListXAmzTargetEnum;
}
export declare class DeleteProtocolsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * InvalidOperationException
     */
    invalidOperationException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
