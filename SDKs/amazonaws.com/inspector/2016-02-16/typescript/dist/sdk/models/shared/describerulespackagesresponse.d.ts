import { SpeakeasyBase } from "../../../internal/utils";
import { FailedItemDetails } from "./faileditemdetails";
import { RulesPackage } from "./rulespackage";
export declare class DescribeRulesPackagesResponse extends SpeakeasyBase {
    failedItems: Record<string, FailedItemDetails>;
    rulesPackages: RulesPackage[];
}
