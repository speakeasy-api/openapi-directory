import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 *  Contains the information that's required to enable a managed Contributor Insights rule for an Amazon Web Services resource.
 */
export declare class ManagedRule extends SpeakeasyBase {
    resourceARN: string;
    tags?: Tag[];
    templateName: string;
}
