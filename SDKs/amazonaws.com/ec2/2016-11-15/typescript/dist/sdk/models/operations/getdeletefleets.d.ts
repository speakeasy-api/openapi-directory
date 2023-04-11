import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteFleetsActionEnum {
    DeleteFleets = "DeleteFleets"
}
export declare enum GETDeleteFleetsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETDeleteFleetsRequest extends SpeakeasyBase {
    action: GETDeleteFleetsActionEnum;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The IDs of the EC2 Fleets.
     */
    fleetId: string[];
    /**
     * <p>Indicates whether to terminate the associated instances when the EC2 Fleet is deleted. The default is to terminate the instances.</p> <p>To let the instances continue to run after the EC2 Fleet is deleted, specify <code>no-terminate-instances</code>. Supported only for fleets of type <code>maintain</code> and <code>request</code>.</p> <p>For <code>instant</code> fleets, you cannot specify <code>NoTerminateInstances</code>. A deleted <code>instant</code> fleet with running instances is not supported.</p>
     */
    terminateInstances: boolean;
    version: GETDeleteFleetsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteFleetsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
