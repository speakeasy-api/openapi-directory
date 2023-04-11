import { SpeakeasyBase } from "../../../internal/utils";
export declare class AuthorizeEndpointAccessMessage extends SpeakeasyBase {
    account: string;
    clusterIdentifier?: string;
    vpcIds?: string[];
}
