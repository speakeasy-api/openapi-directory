import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerNodeEndpoint } from "./customernodeendpoint";
export declare class StartMigrationMessage extends SpeakeasyBase {
    customerNodeEndpointList: CustomerNodeEndpoint[];
    replicationGroupId: string;
}
