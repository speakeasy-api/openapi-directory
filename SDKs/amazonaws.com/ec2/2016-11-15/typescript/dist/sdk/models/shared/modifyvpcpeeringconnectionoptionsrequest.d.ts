import { SpeakeasyBase } from "../../../internal/utils";
import { PeeringConnectionOptionsRequest } from "./peeringconnectionoptionsrequest";
export declare class ModifyVpcPeeringConnectionOptionsRequest extends SpeakeasyBase {
    accepterPeeringConnectionOptions?: PeeringConnectionOptionsRequest;
    dryRun?: boolean;
    requesterPeeringConnectionOptions?: PeeringConnectionOptionsRequest;
    vpcPeeringConnectionId: string;
}
