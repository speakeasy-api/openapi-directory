import { SpeakeasyBase } from "../../../internal/utils";
import { AwsLogSourceTypeEnum } from "./awslogsourcetypeenum";
import { RegionEnum } from "./regionenum";
/**
 * Automatically enable new organization accounts as member accounts from an Amazon Security Lake administrator account.
 */
export declare class AutoEnableNewRegionConfiguration extends SpeakeasyBase {
    region: RegionEnum;
    sources: AwsLogSourceTypeEnum[];
}
