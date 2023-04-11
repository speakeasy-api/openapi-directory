import { SpeakeasyBase } from "../../../internal/utils";
import { OpsEntityItem } from "./opsentityitem";
/**
 * The result of the query.
 */
export declare class OpsEntity extends SpeakeasyBase {
    data?: Record<string, OpsEntityItem>;
    id?: string;
}
