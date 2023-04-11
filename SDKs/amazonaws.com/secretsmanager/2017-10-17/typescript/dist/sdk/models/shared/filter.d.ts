import { SpeakeasyBase } from "../../../internal/utils";
import { FilterNameStringTypeEnum } from "./filternamestringtypeenum";
/**
 * Allows you to add filters when you use the search function in Secrets Manager. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/manage_search-secret.html">Find secrets in Secrets Manager</a>.
 */
export declare class Filter extends SpeakeasyBase {
    key?: FilterNameStringTypeEnum;
    values?: string[];
}
