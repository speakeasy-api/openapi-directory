import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateVpcEndpointConnectionNotificationRequest extends SpeakeasyBase {
    clientToken?: string;
    connectionEvents: string[];
    connectionNotificationArn: string;
    dryRun?: boolean;
    serviceId?: string;
    vpcEndpointId?: string;
}
