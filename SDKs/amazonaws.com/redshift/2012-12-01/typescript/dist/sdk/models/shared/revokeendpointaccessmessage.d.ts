import { SpeakeasyBase } from "../../../internal/utils";
export declare class RevokeEndpointAccessMessage extends SpeakeasyBase {
    account?: string;
    clusterIdentifier?: string;
    force?: boolean;
    vpcIds?: string[];
}
