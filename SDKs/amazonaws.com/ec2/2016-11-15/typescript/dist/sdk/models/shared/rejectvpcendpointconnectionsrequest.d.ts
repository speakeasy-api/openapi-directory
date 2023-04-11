import { SpeakeasyBase } from "../../../internal/utils";
export declare class RejectVpcEndpointConnectionsRequest extends SpeakeasyBase {
    dryRun?: boolean;
    serviceId: string;
    vpcEndpointIds: string[];
}
