import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListAssociatedStacksXAmzTargetEnum {
    PhotonAdminProxyServiceListAssociatedStacks = "PhotonAdminProxyService.ListAssociatedStacks"
}
export declare class ListAssociatedStacksRequest extends SpeakeasyBase {
    listAssociatedStacksRequest: shared.ListAssociatedStacksRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListAssociatedStacksXAmzTargetEnum;
}
export declare class ListAssociatedStacksResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listAssociatedStacksResult?: shared.ListAssociatedStacksResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
