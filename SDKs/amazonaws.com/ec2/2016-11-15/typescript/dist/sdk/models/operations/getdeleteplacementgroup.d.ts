import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeletePlacementGroupActionEnum {
    DeletePlacementGroup = "DeletePlacementGroup"
}
export declare enum GETDeletePlacementGroupVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETDeletePlacementGroupRequest extends SpeakeasyBase {
    action: GETDeletePlacementGroupActionEnum;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The name of the placement group.
     */
    groupName: string;
    version: GETDeletePlacementGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeletePlacementGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
