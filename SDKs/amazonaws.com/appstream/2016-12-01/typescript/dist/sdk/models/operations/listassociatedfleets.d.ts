import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListAssociatedFleetsXAmzTargetEnum {
    PhotonAdminProxyServiceListAssociatedFleets = "PhotonAdminProxyService.ListAssociatedFleets"
}
export declare class ListAssociatedFleetsRequest extends SpeakeasyBase {
    listAssociatedFleetsRequest: shared.ListAssociatedFleetsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListAssociatedFleetsXAmzTargetEnum;
}
export declare class ListAssociatedFleetsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listAssociatedFleetsResult?: shared.ListAssociatedFleetsResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
