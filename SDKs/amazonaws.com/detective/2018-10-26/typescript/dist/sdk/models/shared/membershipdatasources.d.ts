import { SpeakeasyBase } from "../../../internal/utils";
import { TimestampForCollection } from "./timestampforcollection";
/**
 * Details on data source packages for members of the behavior graph.
 */
export declare class MembershipDatasources extends SpeakeasyBase {
    accountId?: string;
    datasourcePackageIngestHistory?: Record<string, Record<string, TimestampForCollection>>;
    graphArn?: string;
}
