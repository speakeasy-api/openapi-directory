import { SpeakeasyBase } from "../../../internal/utils";
import { ListedAgreement } from "./listedagreement";
/**
 * Success
 */
export declare class ListAgreementsResponse extends SpeakeasyBase {
    agreements: ListedAgreement[];
    nextToken?: string;
}
